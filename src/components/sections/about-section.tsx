'use client';
import { useI18n } from '@/contexts/i18n-provider';
import { Card } from '@/components/ui/card';
import { Target, ShieldCheck, Heart, Users } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  const { t } = useI18n();

  const missions = [
    { icon: Target, text: t('about.mission1') },
    { icon: ShieldCheck, text: t('about.mission2') },
    { icon: Heart, text: t('about.mission3') },
    { icon: Users, text: t('about.mission4') },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-headline text-primary">
              {t('about.welcome_title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.welcome_text')}
            </p>
            <div className="space-y-4">
              <h3 className="text-2xl font-headline">{t('about.mission_title')}</h3>
              <ul className="space-y-3">
                {missions.map((mission, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <mission.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span>{mission.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <Card className="overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
               <Image 
                src="https://i.postimg.cc/hj7TxBNp/entrainement2.jpg"
                alt={t('about.image_alt')}
                width={800}
                height={600}
                className="w-full h-auto"
                data-ai-hint="entraînement jjb"
               />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
