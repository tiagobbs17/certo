
import { About } from '@/components/landing/about';
import { Bonuses } from '@/components/landing/bonuses';
import { CourseContent } from '@/components/landing/course-content';
import { Faq } from '@/components/landing/faq';
import { FinalOffer } from '@/components/landing/final-offer';
import { Footer } from '@/components/landing/footer';
import { Guarantee } from '@/components/landing/guarantee';
import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Testimonials } from '@/components/landing/testimonials';
import { WhoIsItFor } from '@/components/landing/who-is-it-for';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <Header />
      <main className="flex-grow w-full">
        <Hero />
        <About />
        <CourseContent />
        <Bonuses />
        <WhoIsItFor />
        <Testimonials />
        <FinalOffer />
        <Guarantee />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
