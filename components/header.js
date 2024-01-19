import Logo from "./logo";
import Nav from "components/nav";
import styles from "styles/header.module.css";
import Container from "components/container";

export default function Header() {
  return (
    <header>
      <Container>
        <div className={styles.flexContainer}>
          <Logo boxOn imageOn />
          <Nav />
        </div>
      </Container>
    </header>
  );
}
