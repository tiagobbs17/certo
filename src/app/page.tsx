
import { Hero } from '@/components/landing/hero';
import { About } from '@/components/landing/about';
import { Features } from '@/components/landing/features';
import { CourseContent } from '@/components/landing/course-content';
import { Testimonials } from '@/components/landing/testimonials';
import { Certificate } from '@/components/landing/certificate';
import { Guarantee } from '@/components/landing/guarantee';
import { FinalOffer } from '@/components/landing/final-offer';
import { Faq } from '@/components/landing/faq';
import { Footer } from '@/components/landing/footer';
import { NotificationPopup } from '@/components/landing/notification-popup';
import { Bonuses } from '@/components/landing/bonuses';
import { WhoIsItFor } from '@/components/landing/who-is-it-for';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <CourseContent />
        <WhoIsItFor />
        <Bonuses />
        <Testimonials />
        <Certificate />
        <Guarantee />
        <FinalOffer />
        <Faq />
      </main>
      <Footer />
      <NotificationPopup />
    </div>
  );
}
