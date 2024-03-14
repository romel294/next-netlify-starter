import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Word Rush" />
    <button>
          <a href="mailto:wordrushapp@gmail.com">Contact us</a>
        </button>
       
      </main>

      <Footer />
    </div>
  )
}
