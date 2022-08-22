import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Features from '../components/Features'

export default function Home() {
  return (
    <div>
      <Head>
        <title>LinkVerter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favio.png" />
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Features />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}