import styles from "./navigation.module.css";

export function Navigation() {
  return (
    <header className={styles.wrap}>
      <nav className={styles.nav} aria-label="Primary navigation">
        <a className={styles.wordmark} href="#top" aria-label="Ziyang Chen, home">
          <strong>ZC</strong>
          <span>AI Innovation</span>
        </a>
        <div className={styles.links}>
          <a href="#work">Portfolio</a>
          <a href="#about">About</a>
          <a href="#what-i-do">What I Do</a>
          <a className={styles.contact} href="mailto:ziyang1037@gmail.com">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
