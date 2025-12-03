import '../styles/globals.css'
import { useEffect } from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  // Optional: Add Inter font via Google Fonts once on app level
  useEffect(() => {
    const link = document.createElement('link')
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
    link.rel = "stylesheet"
    document.head.appendChild(link)
  }, [])

  return (
    <>
      <Head>
        <title>Agro Predict Docs</title>
        <meta name="description" content="Agro Predict Developer Documentation, Whitepaper & One-Pager" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  )
    }
