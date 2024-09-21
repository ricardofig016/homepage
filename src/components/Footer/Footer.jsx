import styles from "./Footer.module.css";

function Footer() {
  const startYear = 2024;
  const currYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <span>
        {"© "}
        {currYear - startYear === 0
          ? startYear + " "
          : startYear + "-" + currYear + " "}
        ricardofig016.github.io
      </span>
    </footer>
  );
}

export default Footer;
