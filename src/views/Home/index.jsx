import styles from "./styles.module.scss";

export function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.block}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title} id={styles.experience}>
            Experience
          </h1>
        </div>
        <div className={styles.blockLine}>
          <div className={styles.strong}>DevOZ</div>
          <br />
          <div className={styles.span}>
            Javascript/Typescript Developer intern 07/21 - 09/21
          </div>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title} id={styles.experience}>
            Skills
          </h1>
        </div>
        <div className={styles.blockLine}>
          <div className={styles.strong}>Front-end</div>
          <br />
          <div className={styles.span}>
            HTML, CSS, React, Vue, Sass, Electron, ExtJs, Material Ui.
          </div>
        </div>
        <div className={styles.blockLine}>
          <div className={styles.strong}>Back-end</div>
          <br />
          <div className={styles.span}>
            NodeJS, NestJS, Express, MongoDB, Rest, NodeRed.
          </div>
        </div>
        <div className={styles.blockLine}>
          <div className={styles.strong}>Miscellaneous</div>
          <br />
          <div className={styles.span}>
            Git, Docker, Scrum, Python, Docker, Typescript.
          </div>
        </div>
      </div>
    </div>
  );
}
