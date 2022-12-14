/* eslint-disable react-hooks/exhaustive-deps */
import { saveAs } from "file-saver";
import React from "react";
import Resume from "../../document/Resume.pdf";
import Project from "../Project/Project";
import { projects } from "./data";
import "./Projects.css";

const Projects = () => {
  // const { projects } = useSelector((store) => store.projects);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProjects());
  // }, []);

  const saveFile = () => {
    saveAs(Resume, `christian_resume.pdf`);
  };

  return (
    <section className="padding" id="projects">
      <h1 className="section-title">Few projects are as follow.</h1>
      <div id="projects-container">
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <p onClick={() => saveFile()} className="download">
          Download my Resume
        </p>
      </div>
    </section>
  );
};

export default Projects;
