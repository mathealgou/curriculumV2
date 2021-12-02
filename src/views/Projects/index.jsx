import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { ProjectCard } from "../../components/ProjectCard";

export function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(async () => {
    const data = await fetch("https://api.github.com/users/mathealgou/repos");
    const parsedData = await data.json();
    await setProjects(parsedData);
  }, []);
  return (
    <div className={styles.container}>
      {projects ? (
        projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
