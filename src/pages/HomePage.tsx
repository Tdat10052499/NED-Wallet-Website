import { HeroScene } from '../components/HeroScene';
import { PartnerMarquee } from '../components/PartnerMarquee';
import { ExperienceShowcase } from '../components/ExperienceShowcase';
import { HowItWorks } from '../components/HowItWorks';
import { StablecoinExplainer } from '../components/StablecoinExplainer';
import { MiniAppsPreview } from '../components/MiniAppsPreview';
import { DemoGuide } from '../components/DemoGuide';
import { FAQ } from '../components/FAQ';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <main className="w-full min-h-screen">
      {/* 1. Hero Cinematic & 3D Showcase */}
      <HeroScene onNavigate={onNavigate} />

      {/* 1.5 Neo-Brutalist Partner Marquee Frame */}
      <PartnerMarquee />

      {/* 2. Product Experience Transition & Interactive Tabs */}
      <ExperienceShowcase />

      {/* 3. Stablecoin Educational Explainer */}
      <StablecoinExplainer />

      {/* 4. How It Works & Devnet Test Warning */}
      <HowItWorks />

      {/* 5. Mini-Apps Preview (In Development) */}
      <MiniAppsPreview onNavigate={onNavigate} />

      {/* 6. Demo Guide (#demo) */}
      <DemoGuide />

      {/* 7. Accessible FAQ Accordion */}
      <FAQ />
    </main>
  );
};
