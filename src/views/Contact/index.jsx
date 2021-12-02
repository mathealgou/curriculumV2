import { React } from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function Contact() {
  return (
    <div className={styles.contact}>
      <h1>Contact</h1>

      <FontAwesomeIcon icon={faLinkedin} />
    </div>
  );
}
