import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { ClientRecognition } from '@/components/sections/ClientRecognition';
import { BusinessSolutions } from '@/components/sections/BusinessSolutions';
import { ServiceShowcases } from '@/components/sections/ServiceShowcases';
import { WhyClickOps } from '@/components/sections/WhyClickOps';
import { Products } from '@/components/sections/Products';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Process } from '@/components/sections/Process';
import { FrontierSection } from '@/components/sections/FrontierSection';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <ClientRecognition />
        <BusinessSolutions />
        <ServiceShowcases />
        <WhyClickOps />
        <Products />
        <CaseStudies />
        <Process />
        <FrontierSection />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}