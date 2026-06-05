import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Brush, Code2, Gamepad2, Mail } from "@/components/icons";
import { SiteShell } from "@/components/site-shell";

export default function HomePage() {
  return (
    <SiteShell>
      <section className="hero">
        <div className="hero-copy">
          <p className="section-index">01 / Portfolio</p>
          <h1>Developer.<br /><em>Artist.</em> Builder.</h1>
          <p className="lede">
            I build simulation software, thoughtful web experiences, and expressive portrait work.
            This local-first portfolio brings the threads together.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/programmer">Explore the work <ArrowRight size={18} /></Link>
            <a className="button quiet" href="mailto:jmarsha82@yahoo.com?subject=From%20Website"><Mail size={18} /> Contact me</a>
          </div>
        </div>
        <div className="portrait-stage">
          <div className="portrait-frame">
            <Image src="/img/profile_picture.jpg" alt="Justin Marshall" fill priority sizes="420px" />
          </div>
          <p>Senior programmer analyst<br />St. Louis, Missouri</p>
        </div>
      </section>
      <section className="home-rail" aria-label="Portfolio areas">
        <Link href="/programmer"><Code2 /><span><strong>Programmer</strong>Simulation, web, architecture</span><ArrowRight /></Link>
        <Link href="/artist"><Brush /><span><strong>Artist</strong>Portraits, landscape, abstract</span><ArrowRight /></Link>
        <Link className="games-link" href="/games"><Gamepad2 /><span><strong>Games</strong>Tetris and Snake, in browser</span><ArrowRight /></Link>
      </section>
    </SiteShell>
  );
}
