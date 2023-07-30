import Head from "next/head";
import styles from "./layout.module.css";
import utilesstyles from "../styles/utiles.module.css";
import Link from "next/link";


const name = "masaya Code";
export const siteTitle = "Next.js Blog";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img src="/profile.png" className={`${utilesstyles.borderCircle} ${styles.headerHomeImage} `}/>
            <h1 className={utilesstyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img src="/profile.png" className={`${utilesstyles.borderCircle}`}/>
            <h1 className={utilesstyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
            <Link href='/'>← ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
