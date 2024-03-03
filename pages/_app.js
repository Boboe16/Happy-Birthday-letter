import '@/styles/globals.css'
import Head from "next/head"
import Script from "next/script"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/*<link rel="icon" href="/B-icon.png" />*/}
        {/*<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />*/}
      </Head>
      {/*<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous" />*/}
      <Component {...pageProps} />
    </>
  )
}