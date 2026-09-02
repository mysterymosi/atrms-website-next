import { About } from '@/components/About'
import { CallToAction } from '@/components/CallToAction'
import { Dashboard } from '@/components/Dashboard'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { Integrations } from '@/components/Integrations'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Resources } from '@/components/Resources'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Security } from '@/components/Security'
import { TaxpayerServices } from '@/components/TaxpayerServices'
import { WhyAtlas } from '@/components/WhyAtlas'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <HowItWorks />
        <Dashboard />
        {/* <TaxpayerServices /> */}
        <Integrations />
        {/* <Security /> */}
        <WhyAtlas />
        <About />
        {/* <Resources /> */}
        <Faqs />
        {/* <CallToAction /> */}
      </main>
      <Footer />
    </>
  )
}
