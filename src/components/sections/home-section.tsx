'use client';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useI18n } from '@/contexts/i18n-provider';

export default function HomeSection() {
  const { t } = useI18n();

  return (
    <section className="min-h-[calc(100vh-10rem)] flex items-center justify-center py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
            {t('home_title')}
          </h1>
          <p className="text-right text-sm text-foreground/70 mb-6 italic">
            {t('home_subtitle')}
          </p>
          <p className="text-lg sm:text-xl text-foreground/80 mb-10 leading-relaxed text-left">
            {t('home_description_1')}
            <strong className="text-primary font-semibold">{t('home_description_peace')}</strong>
            {t('home_description_2')}
            <strong className="text-primary font-semibold">{t('home_description_power')}</strong>
            {t('home_description_3')}
            <strong className="text-primary font-semibold">{t('home_description_vision')}</strong>
            {t('home_description_4')}
            <strong className="text-primary font-semibold">{t('home_description_fulfilled')}</strong>
            {t('home_description_5')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
              <Link href="/#about">{t('home_discover_button')}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary w-full sm:w-auto">
              <Link href="/#contact">{t('home_contact_button')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
