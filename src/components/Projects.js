import { projects } from "../portfolio";


function Projects() {
  return <section id="projects" className="projects">
    <h3 className="projects__title">{projects.title}</h3>
    <p className="projects__description">{projects.description}</p>
    <div>qui ci metteremo lo swiper dei nostri progetti...</div>
  </section>;
}

export default Projects;
