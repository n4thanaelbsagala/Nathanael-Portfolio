import KnnPlot from "@/components/KnnPlot";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/Icons";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">
              <span className="dot" aria-hidden="true" />
              {profile.location}
            </p>

            <h1 id="hero-heading">{profile.name}</h1>
            <p className="headline">{profile.headline}</p>
            <p className="intro">{profile.intro}</p>

            <div className="actions">
              <a className="btn" href="#projects">
                View my projects
              </a>
              <a className="btn btn-ghost" href="#contact">
                Get in touch
              </a>
            </div>

            <div className="hero-social">
              <a
                className="iconlink"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile, opens in a new tab"
              >
                <GitHubIcon />
              </a>
              <a
                className="iconlink"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile, opens in a new tab"
              >
                <LinkedInIcon />
              </a>
              <a
                className="iconlink"
                href={profile.instagramHandle}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile, opens in a new tab"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <KnnPlot />
        </div>
      </div>
    </section>
  );
}
