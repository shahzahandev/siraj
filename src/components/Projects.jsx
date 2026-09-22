import { useRef } from "react";
import { projects } from "../data/projects.js";
import { useGsap } from "../hooks/useGsap.js";
import ProjectCard from "./ProjectCard.jsx";

const Projects = () => {
  const sectionRef = useRef(null);

  useGsap(sectionRef, ({ gsap }) => {
    gsap.from(".project-card", {
      y: 34,
      opacity: 0,
      duration: 0.25,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 68%"
      }
    });
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-padding bg-white dark:bg-zinc-900/50">
      <div className="container-shell">
        <div className="max-w-3xl">
          <span className="eyebrow">Featured Projects</span>
          <h2 className="section-title mt-5">Selected builds with full-stack thinking.</h2>
          <p className="section-copy">
            Premium project cards with empty image slots ready for real screenshots later.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
