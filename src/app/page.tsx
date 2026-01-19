
import { Hero } from '@/components/landing/hero';
import { Benefits } from '@/components/landing/benefits';
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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Features />
        <CourseContent />
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
