import { React } from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

export function Contact() {
  return (
    <div className={styles.contact}>
      <h1>Contact</h1>
      <div className={styles.container}>
        <a
          href="https://www.linkedin.com/in/matheus-goulart-815661210/"
          className={styles.link}
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          <h3 className={styles.title}>LinkedIn</h3>
        </a>
      </div>
      <div className={styles.container}>
        <a href="mailto:mathealgou@gmail.com" className={styles.link}>
          <FontAwesomeIcon icon={faEnvelopeSquare} className={styles.icon} />
          <h3 className={styles.title}>Email</h3>
        </a>
      </div>
    </div>
  );
}
