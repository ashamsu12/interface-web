import Head from 'next/head'

import { Mission } from '@/components/Mission'
import { Benefits } from '@/components/Benefits'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Technology } from '@/components/Technology'

export default function Home() {
  return (
    <>
      <Head>
        <title>Interface - The Interface for Africa</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Technology />
        <Mission />
        <SecondaryFeatures />
        {/* <Testimonials />
        <Pricing /> */}
        {/* <Benefits /> */}
      </main>
      <Footer />
    </>
  )
}
