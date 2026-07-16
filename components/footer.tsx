import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`page-shell ${styles.inner}`}>
        <p>Have a role, project or idea worth discussing?</p>
        <h2 className="display-type">
          Let&apos;s make it <em>tangible.</em>
        </h2>
        <a className={styles.contact} href="mailto:ziyang1037@gmail.com">
          Contact
          <ArrowUpRight aria-hidden="true" size={22} weight="bold" />
        </a>
        <div className={styles.bottom}>
          <span>Ziyang Chen</span>
          <span>AI Experience Designer</span>
          <span>2026</span>
        </div>
      </div>
    </footer>
  );
}
