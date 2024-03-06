import '@/styles/globals.css'
import Head from "next/head"
import Script from "next/script"
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/cat.png" />
      </Head>
      <DefaultSeo
        title="To My Love"
        description="♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡"
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_URL}`,
          title: "To My Baby",
          description: "♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡♡",
          images: [
            {
              url: "https://www.shutterstock.com/image-vector/party-face-emoji-vector-600nw-1285279276.jpg",
              width: 512,
              height: 512,
              alt: "image",
            },
          ],
          site_name: "To My Labidabs",
        }}
      />
      <Component {...pageProps} />
    </>
  )
}