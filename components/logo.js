import Link from "next/link";
import Image from "next/image";
import styles from "styles/logo.module.css";
import turi from "images/mainlogo.png";

export default function Logo({ boxOn, imageOn = false }) {
  return (
    <Link href="/" className={boxOn ? styles.box : styles.basic}>
      <div>
        {imageOn && (
          <figure className={styles.image}>
            <Image
              src={turi}
              alt=""
              sizes="(min-width: 1152px) 121px, (min-width: 768px) 121px"
              priority
              placeholder="blur"
            />
          </figure>
        )}
      </div>
    </Link>
  );
}
