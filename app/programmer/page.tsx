import { SiteShell } from "@/components/site-shell";
import { currentSkills, education, extendedSkills, work } from "@/data/content";

export default function ProgrammerPage() {
  return (
    <SiteShell>
      <header className="page-header">
        <p className="section-index">02 / Programmer</p>
        <h1>Engineering with<br /><em>clarity and care.</em></h1>
        <p>Senior programmer at Boeing, development lead, test advocate, and lifelong builder.</p>
      </header>
      <div className="resume-layout">
        <aside className="resume-aside">
          <section>
            <h2>Current stack</h2>
            {currentSkills.map(([name, description]) => (
              <div className="skill-row" key={name}><strong>{name}</strong><p>{description}</p></div>
            ))}
          </section>
          <section>
            <h2>Education</h2>
            {education.map(([degree, school]) => <div className="education" key={degree}><strong>{degree}</strong><span>{school}</span></div>)}
          </section>
        </aside>
        <div className="experience">
          <h2>Experience</h2>
          {work.map((job) => (
            <article key={`${job.company}-${job.role}`}>
              <div><span>{job.date}</span><h3>{job.role}</h3><strong>{job.company}</strong></div>
              <ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </article>
          ))}
          <section className="toolbox">
            <h2>Extended toolbox</h2>
            <div>{extendedSkills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </section>
        </div>
      </div>
    </SiteShell>
  );
}
