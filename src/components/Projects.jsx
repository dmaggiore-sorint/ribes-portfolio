import { projects } from "../portfolio";
import CustomSwiper from "./CustomSwiper";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h3 className="projects__title">{projects.title}</h3>
      <p className="projects__description">{projects.description}</p>
      <div className="projects__swiper">
        <CustomSwiper>
          {projects.items.map((item) => {
            return (
              <div key={item.title} className="projects__item">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className="projects__item-stack">{item.stack}</div>
              </div>
            );
          })}
        </CustomSwiper>
      </div>
    </section>
  );
}

export default Projects;
