import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import { contact, currentSkills, devBooks, devLinks, education, extendedSkills, work } from "@/data/content";

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
          <section className="contact-card">
            <h2>{contact.role}</h2>
            <p>{contact.phone}</p>
            <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            <small>Last updated: {new Date(contact.lastUpdated).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</small>
          </section>
          <section>
            <h2>Current stack</h2>
            {currentSkills.map((skill) => (
              <div className="skill-row" key={skill.name}>
                <a href={skill.href} target="_blank" rel="noopener noreferrer"><strong>{skill.name}</strong></a>
                <span>{skill.status}</span>
                <p>{skill.description}</p>
              </div>
            ))}
          </section>
          <section>
            <h2>Education</h2>
            {education.map(([degree, school, location, href]) => (
              <a className="education" href={href} key={degree} rel="noopener noreferrer" target="_blank">
                <strong>{degree}</strong>
                <span>{school}</span>
                <span>{location}</span>
              </a>
            ))}
          </section>
        </aside>
        <div className="experience">
          <h2>Experience</h2>
          {work.map((job) => (
            <article key={`${job.company}-${job.role}`}>
              <div><span>{job.date}</span><h3>{job.role}</h3><strong>{job.company}</strong><small>{job.location}</small></div>
              <ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </article>
          ))}
          <section className="toolbox">
            <h2>Extended Tech Stack</h2>
            <div>{extendedSkills.map(([name, href, status, description]) => (
              <a href={href} key={name} rel="noopener noreferrer" target="_blank">
                <strong>{name}</strong>
                <span>{status}</span>
                <p>{description}</p>
              </a>
            ))}</div>
          </section>
          <section className="resource-section">
            <h2>Dev Books</h2>
            <div className="resource-grid book-grid">
              {devBooks.map(([image, title, author, year, description, isbn]) => (
                <article className="resource-card" key={title}>
                  <div className="book-cover"><Image src={`/img/developer/${image}`} alt={title} fill sizes="(max-width: 720px) 100vw, 220px" /></div>
                  <div>
                    <h3>{title}</h3>
                    <p>{author}</p>
                    <p>{year}</p>
                    <p>{description}</p>
                    <small>ISBN: {isbn}</small>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className="resource-section">
            <h2>Dev Links</h2>
            <div className="resource-grid link-grid">
              {devLinks.map(([image, title, href, description]) => (
                <a className="resource-card" href={href} key={title} rel="noopener noreferrer" target="_blank">
                  <div className="link-logo"><Image src={`/img/developer/${image}`} alt={title} fill sizes="(max-width: 720px) 100vw, 220px" /></div>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </SiteShell>
  );
}
