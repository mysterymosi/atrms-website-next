import { CallToAction } from '@/components/CallToAction'
import { Dashboard } from '@/components/Dashboard'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { Integrations } from '@/components/Integrations'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Security } from '@/components/Security'
import { TrustMarquee } from '@/components/TrustMarquee'
import { WhyAtlas } from '@/components/WhyAtlas'

export default function Home() {
  return (
    <>
      <Header />
      <main className="[&_section[id]]:scroll-mt-24">
        <Hero />
        <TrustMarquee />
        <PrimaryFeatures />
        <Dashboard />
        <SecondaryFeatures />
        <HowItWorks />
        <Integrations />
        <WhyAtlas />
        <Security />
        <Faqs />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
