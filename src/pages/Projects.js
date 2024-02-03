import { useLoaderData } from "react-router-dom";

function Projects(props) {
  const projects = useLoaderData();

  return (
    <div className="Projects">
      {projects.map((project) => (
        <div className="example">
          <h1>{project.name}</h1>
          <img src={project.image} />
          <div className="links">
            <a href={project.git}>
              <button>Github</button>
            </a>
            <a href={project.live}>
              <button>Live Site</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
