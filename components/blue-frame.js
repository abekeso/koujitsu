import styles from "styles/blue-frame.module.css";
import Container from "components/container";
import Link from "next/link";

export default function BlueFrame({ children }) {
  return (
    <div classname={styles.frame}>
      <Container>{children}</Container>
      <Link href="/blog">Recent Blog Posts</Link>
    </div>
  );
}
