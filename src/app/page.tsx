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
import { RecipeCustomizer } from '@/components/landing/recipe-customizer';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Features />
        <CourseContent />
        <div className="bg-card py-16 sm:py-24">
          <RecipeCustomizer />
        </div>
        <Testimonials />
        <Certificate />
        <Guarantee />
        <FinalOffer />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
