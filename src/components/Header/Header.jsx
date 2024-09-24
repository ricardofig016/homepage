import styles from "./Header.module.css";

import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a className={styles.a} href="#home">
              home
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="#news">
              news
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="#contact">
              contact
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="#about">
              about
            </a>
          </li>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}

export default Header;
