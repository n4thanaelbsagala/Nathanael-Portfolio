import Section from "@/components/Section";
import CopyEmailButton from "@/components/CopyEmailButton";
import { MailIcon } from "@/components/Icons";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <Section id="contact" rail="Contact">
      <div className="contact-grid">
        <div>
          <h2 id="contact-heading">Let&rsquo;s work together.</h2>
          <p className="lede section-lede">
            For research opportunities, collaborations, or technical discussions, feel free to reach
            out.
          </p>
          <div className="actions">
            <a className="btn" href={`mailto:${profile.email}`}>
              <MailIcon />
              Email me
            </a>
          </div>
        </div>

        <div className="details">
          <div className="detail">
            <span className="k">Email</span>
            <span className="v">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </span>
            <CopyEmailButton email={profile.email} />
          </div>

          <div className="detail">
            <span className="k">Phone</span>
            <span className="v">
              <a href={profile.phoneHref}>{profile.phone}</a>
            </span>
          </div>

          <div className="detail">
            <span className="k">Based in</span>
            <span className="v">{profile.location}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
