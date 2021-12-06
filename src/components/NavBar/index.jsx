import { React } from "react";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function NavBar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className={styles.NavBar}>
      <div className={styles.container}>
        <h1 className={styles.title}>Matheus Goulart</h1>
        <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon
            icon={faBars}
            size="3x"
            rotation={isOpen ? 90 : 0}
            className={styles.icon}
          />
        </button>
      </div>
      <div className={isOpen ? styles.menuOpen : styles.menuClosed}>
        {props.props.links
          ? props.props.links.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                style={{ textDecoration: "none" }}
                className={styles.menuLink}
              >
                {""}
                {link.name}
              </Link>
            ))
          : null}
      </div>
    </div>
  );
}
