import Image from "next/image";
import { SiteShell } from "@/components/site-shell";

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="about">
        <div className="about-image"><Image src="/img/profile_picture.jpg" alt="Justin Marshall" fill priority sizes="40vw" /></div>
        <article>
          <p className="section-index">04 / About</p>
          <h1>Software engineer.<br /><em>Working artist.</em></h1>
          <p>I am a senior programmer analyst at Boeing and lead for a development team in training simulation. I write and review code, maintain onboarding documentation, investigate production issues, and build primarily with C++, TypeScript, and simulation tooling.</p>
          <p>Previously I worked at Accenture Federal Services as a senior systems specialist and proxy product owner for a USPS project. Before software, I worked in logistics at Phillips 66, where I became fluent in SAP and led plant safety initiatives.</p>
          <p>Outside software development, I have sold more than 100 works to private collections and participated in regional shows including ARTEAST and Piasa Summer. My art centers on stylized portraiture, with occasional landscapes and abstracts.</p>
        </article>
      </section>
    </SiteShell>
  );
}
