import { getAllPosts } from "lib/api";
import Meta from "components/meta";
import Container from "components/container";
import Hero from "components/hero";
import Posts from "components/posts";
import Pagination from "components/pagenation";
import { getPlaiceholder } from "plaiceholder";
import { getImageBuffer } from "lib/getImageBuffer";

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from "lib/constants";
import Introduction from "../../components/introduction";
import Logo from "../../components/logo";

export default function Home({ posts }) {
  return (
    <Container>
      <Meta />
      <Hero title="星に願いを" subtitle="徒然なる備忘録" imageOn />
      <hr />

      <Introduction />

      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="More Posts" />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts(4);

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const imageBuffer = await getImageBuffer(post.eyecatch.url);
    const { base64 } = await getPlaiceholder(imageBuffer);
    post.eyecatch.blurDataURL = base64;
  }
  return {
    props: {
      posts: posts,
    },
  };
}
