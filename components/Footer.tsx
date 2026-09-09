import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot">
        <p>{profile.name} &mdash; University of British Columbia</p>
        <p className="set">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href="#top">Back to top</a>
        </p>
      </div>
    </footer>
  );
}
