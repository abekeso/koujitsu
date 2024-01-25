import { useState } from "react";
import Link from "next/link";
import styles from "styles/nav.module.css";

export default function Nav() {
  const [navIsOpen, setNavISOpen] = useState(false);
  const toggleNav = () => {
    setNavISOpen((prev) => !prev);
  };
  const closeNav = () => {
    setNavISOpen(false);
  };
  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}
      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className="sr-only">Menu</span>
      </button>
      <ul className={styles.list}>
        <li>
          <Link href="/" onClick={closeNav}>
            HOME
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={closeNav}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link href="/blog" onClick={closeNav}>
            BLOG
          </Link>
        </li>
      </ul>
    </nav>
  );
}
