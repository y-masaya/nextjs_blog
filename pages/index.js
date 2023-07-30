import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";
import utilsStyle from "../styles/utiles.module.css";
import styles from "../styles/Home.module.css";
import { getPostsData } from "../lib/post";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();
  // console.log(allPostsData);

  return {
    props: { allPostsData },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilsStyle.headingMd}>
        <p>私はアドテクエンジニアです。</p>
      </section>

      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img
                  src="/images/thumbnail01.jpg"
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link legacyBehavior href={`/posts/${id}`}>
                <a className={utilsStyle.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilsStyle.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
