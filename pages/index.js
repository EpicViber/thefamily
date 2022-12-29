import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The Family</title>
      </Head>

      <main>
        <Header title="THE FAMILY" />
        <p className="description">
          <code>A group owned by a few idiots on discord</code>
        </p>
        <img src="https://cdn.discordapp.com/attachments/565187025058136075/1058000579101732934/DALLE_2022-10-03_18.55.19_-_only_in_ohio.png" alt="group icon" width="300" height="300"></img>
      </main>
      <Footer />
      </div>
  )
}