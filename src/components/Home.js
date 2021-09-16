import { Link } from "react-router-dom";

import useAPI from "../hooks/useNftmApi";

function Home() {
  const { isLoading, result, error } = useAPI("ListProjects");
  return (
    <div className="home">
      <h2>Projects</h2>
      <div className="project-list">
        {isLoading || !result ? (
          <p>Loading...</p>
        ) : (
          <>
            {result.map((project) => {
              console.log(project);
              return (
                <div className="project-list-item" key={project.id}>
                  <h3>
                    <Link to={`project/${project.id}`}>
                      {project.projectname}
                    </Link>
                  </h3>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
