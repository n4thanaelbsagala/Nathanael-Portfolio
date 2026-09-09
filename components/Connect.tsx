import Section from "@/components/Section";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/Icons";
import { profile } from "@/data/profile";

export default function Connect() {
  return (
    <Section id="connect" rail="Connect" className="connect-band">
      <h2 id="connect-heading">Let&rsquo;s connect</h2>
      <p className="lede section-lede">
        Interested in research, AI/ML, software development, or collaboration? Feel free to connect.
      </p>

      <div className="cards">
        <a
          className="ccard"
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="top">
            <GitHubIcon size={18} />
            <span>GitHub</span>
          </span>
          <span className="handle">{profile.githubHandle}</span>
          <span className="sub">Code and project repositories</span>
        </a>

        {profile.linkedin ? (
          <a
            className="ccard"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="top">
              <LinkedInIcon size={18} />
              <span>LinkedIn</span>
            </span>
            <span className="handle">View profile</span>
            <span className="sub">Professional background</span>
          </a>
        ) : (
          <div className="ccard pending">
            <span className="top">
              <LinkedInIcon size={18} />
              <span>LinkedIn</span>
            </span>
            <span className="handle">Profile coming soon</span>
            <span className="sub">Email is the fastest way to reach me meanwhile</span>
          </div>
        )}

        <a
          className="ccard"
          href={profile.instagramHandle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="top">
            <InstagramIcon size={18} />
            <span>Instagram</span>
          </span>
          <span className="handle">View Profile</span>
          <span className="sub">Personal</span>
        </a>
      </div>
    </Section>
  );
}
