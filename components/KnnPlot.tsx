"use client";

import { useEffect, useRef } from "react";

const K = 5;
const SVG_NS = "http://www.w3.org/2000/svg";

/** [x, y, class] where class 0 and 1 are the two labelled groups. */
const POINTS: ReadonlyArray<readonly [number, number, 0 | 1]> = [
  [78, 232, 0], [102, 198, 0], [122, 246, 0], [142, 210, 0], [92, 152, 0], [152, 252, 0],
  [168, 192, 0], [116, 122, 0], [190, 238, 0], [134, 170, 0], [202, 204, 0], [68, 190, 0],
  [232, 124, 1], [266, 92, 1], [300, 142, 1], [252, 168, 1], [318, 74, 1], [286, 180, 1],
  [338, 118, 1], [302, 48, 1], [240, 64, 1], [214, 98, 1], [346, 170, 1], [276, 128, 1],
];

const QUERIES: ReadonlyArray<readonly [number, number]> = [
  [198, 152], [236, 144], [182, 182], [222, 112],
];

const diamond = (x: number, y: number, r: number) =>
  `M${x} ${y - r}L${x + r} ${y}L${x} ${y + r}L${x - r} ${y}Z`;

/**
 * Decorative illustration of the k-nearest-neighbours rule: a query point
 * moves through a two-dimensional feature space and draws edges to its
 * five closest labelled neighbours. Not model output.
 */
export default function KnnPlot() {
  const gridRef = useRef<SVGGElement | null>(null);
  const pointsRef = useRef<SVGGElement | null>(null);
  const edgesRef = useRef<SVGGElement | null>(null);
  const queryRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const grid = gridRef.current;
    const pointLayer = pointsRef.current;
    const edgeLayer = edgesRef.current;
    const queryLayer = queryRef.current;
    if (!grid || !pointLayer || !edgeLayer || !queryLayer) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    for (let x = 46; x <= 384; x += 28) {
      const line = document.createElementNS(SVG_NS, "line");
      line.setAttribute("x1", String(x));
      line.setAttribute("y1", "18");
      line.setAttribute("x2", String(x));
      line.setAttribute("y2", "264");
      grid.appendChild(line);
    }
    for (let y = 18; y <= 264; y += 28) {
      const line = document.createElementNS(SVG_NS, "line");
      line.setAttribute("x1", "46");
      line.setAttribute("y1", String(y));
      line.setAttribute("x2", "384");
      line.setAttribute("y2", String(y));
      grid.appendChild(line);
    }

    POINTS.forEach(([x, y, group]) => {
      const dot = document.createElementNS(SVG_NS, "circle");
      dot.setAttribute("cx", String(x));
      dot.setAttribute("cy", String(y));
      dot.setAttribute("r", "4.6");
      dot.setAttribute("class", group === 0 ? "pt-a" : "pt-b");
      pointLayer.appendChild(dot);
    });

    const halo = document.createElementNS(SVG_NS, "circle");
    halo.setAttribute("class", "halo");
    halo.setAttribute("r", "0");
    queryLayer.appendChild(halo);

    const query = document.createElementNS(SVG_NS, "path");
    query.setAttribute("class", "q");
    queryLayer.appendChild(query);

    const draw = (index: number) => {
      const [qx, qy] = QUERIES[index];
      query.setAttribute("d", diamond(qx, qy, 6));

      const nearest = POINTS.map((point) => ({
        point,
        distance: Math.hypot(point[0] - qx, point[1] - qy),
      }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, K);

      halo.setAttribute("cx", String(qx));
      halo.setAttribute("cy", String(qy));
      halo.setAttribute("r", String(nearest[K - 1].distance + 5));

      edgeLayer.replaceChildren();
      nearest.forEach(({ point }, order) => {
        const edge = document.createElementNS(SVG_NS, "line");
        edge.setAttribute("class", "edge");
        edge.setAttribute("x1", String(qx));
        edge.setAttribute("y1", String(qy));
        edge.setAttribute("x2", String(point[0]));
        edge.setAttribute("y2", String(point[1]));

        if (!reduce) {
          const length = Math.hypot(point[0] - qx, point[1] - qy);
          edge.style.strokeDasharray = String(length);
          edge.style.strokeDashoffset = String(length);
          edge.animate(
            [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
            { duration: 520, delay: order * 70, fill: "forwards", easing: "cubic-bezier(.2,.7,.3,1)" }
          );
        }

        edgeLayer.appendChild(edge);
      });
    };

    draw(0);
    if (reduce) return;

    let index = 0;
    const timer = window.setInterval(() => {
      index = (index + 1) % QUERIES.length;
      draw(index);
    }, 3600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <figure className="panel">
      <svg
        className="knn"
        viewBox="0 0 400 300"
        role="img"
        aria-label="Illustration of a k-nearest neighbours classifier: a query point in a two-dimensional feature space connected to its five closest labelled points."
      >
        <g className="grid-l" ref={gridRef} />
        <line className="axis" x1="46" y1="264" x2="384" y2="264" />
        <line className="axis" x1="46" y1="18" x2="46" y2="264" />
        <text className="lbl" x="46" y="284">
          Seed rank
        </text>
        <text className="lbl" x="-160" y="14" transform="rotate(-90)">
          Conference win %
        </text>
        <g ref={edgesRef} />
        <g ref={pointsRef} />
        <g ref={queryRef} />
      </svg>
      <figcaption>
        <span>k-nearest neighbours, k = 5</span>
        <span>Illustrative &mdash; not model output</span>
      </figcaption>
    </figure>
  );
}
