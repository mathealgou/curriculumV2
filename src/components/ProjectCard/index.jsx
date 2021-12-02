import React from "react";
import styles from "./styles.module.scss";

export function ProjectCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.project.name}</div>
    </div>
  );
}
