import React from "react";
import styles from "./styles.module.scss";

export function ProjectCard(props) {
  console.log(props.project);
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.project.name}</div>
      <p className={styles.description}>{props.project.description}</p>
      <a href={props.project.html_url} className={styles.link}>
        See more
      </a>
    </div>
  );
}
