import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Benefits } from '@/components/landing/benefits';
import { Features } from '@/components/landing/features';
import { CourseContent } from '@/components/landing/course-content';
import { Testimonials } from '@/components/landing/testimonials';
import { Certificate } from '@/components/landing/certificate';
import { Guarantee } from '@/components/landing/guarantee';
import { FinalOffer } from '@/components/landing/final-offer';
import { Faq } from '@/components/landing/faq';
import { RecipeCustomizer } from '@/components/landing/recipe-customizer';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Features />
        <CourseContent />
        <Testimonials />
        <div className="bg-card py-16 sm:py-24">
          <RecipeCustomizer />
        </div>
        <Certificate />
        <Guarantee />
        <FinalOffer />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
