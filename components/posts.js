import styles from "styles/posts.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Posts({ posts }) {
  return (
    <div className={styles.heading}>
      <h2>備忘録</h2>
      <div className={styles.gridContainer}>
        {posts.map(({ title, slug, eyecatch, publishDate }) => (
          <article className={styles.post} key={slug}>
            <Link href={`/blog/${slug}`}>
              <figure>
                <Image
                  src={eyecatch.url}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  sizes="(min-width: 1152px) 576px, 50vw"
                  placeholder="blur"
                  blurDataURL={eyecatch.blurDataURL}
                />
              </figure>
              <h2>{title}</h2>
              <p>{publishDate}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
