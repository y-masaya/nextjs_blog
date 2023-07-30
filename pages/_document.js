import { Html, Head, Main, NextScript } from "next/document";
import { siteTitle } from "../components/Layout";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <title>{siteTitle}</title> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
