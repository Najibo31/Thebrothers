'use client';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useI18n } from '@/contexts/i18n-provider';
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{backgroundImage: "url('https://i.postimg.cc/4NfwCCp0/club.jpg')"}}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left text-white">
        <div className="max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-6">
            <Image
                src="https://i.postimg.cc/0jHWNcsR/brothers2.png"
                alt="Hand Fight Club Emblem"
                width={150}
                height={150}
                className="flex-shrink-0 invert"
                priority
            />
            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl">
              {t('hero.brand')}
            </h1>
          </div>
          
          <p className="text-lg md:text-xl font-semibold text-primary mt-8">{t('hero.location')}</p>
          <p className="text-xl md:text-2xl font-semibold max-w-2xl mt-4">
            {t('hero.tagline')}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="https://wa.me/590691275351" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" /> {t('hero.cta_trial')}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-black">
              <Link href="/abonnements">
                {t('hero.cta_subscriptions')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
