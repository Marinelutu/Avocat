import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import About from '@/components/About';
import Process from '@/components/Process';
import Cases from '@/components/Cases';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StickyContact from '@/components/StickyContact';

const Index = () => (
  <main>
    <Navbar />
    <Hero />
    <TrustBar />
    <Services />
    <About />
    <Process />
    <Cases />
    <Testimonials />
    <FAQ />
    <Contact />
    <Footer />
    <StickyContact />
  </main>
);

export default Index;
