'use client';
import { useI18n } from '@/contexts/i18n-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import TeamSection from '@/components/sections/team-section';

export default function EquipePage() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-5xl md:text-7xl font-headline text-primary mb-4">{t('team.page_title')}</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t('team.page_subtitle')}</p>
            </div>
            
            <div className="animate-in fade-in duration-1000 delay-300">
                <TeamSection />
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
