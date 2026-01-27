'use client';
import { useI18n } from '@/contexts/i18n-provider';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function DisciplinesSection() {
  const { t } = useI18n();

  const disciplines = [
    {
      id: 'jjb',
      title: t('disciplines.jjb.title'),
      description: t('disciplines.jjb.description'),
      image: 'https://i.postimg.cc/501b55RZ/prise5.jpg',
      image_alt: t('disciplines.jjb.image_alt'),
      features_title: t('disciplines.jjb.features_title'),
      features: [
        t('disciplines.jjb.feature1'),
        t('disciplines.jjb.feature2'),
        t('disciplines.jjb.feature3'),
      ],
      ai_hint: 'jiu-jitsu combat'
    },
    {
      id: 'mma',
      title: t('disciplines.mma.title'),
      description: t('disciplines.mma.description'),
      image: 'https://i.postimg.cc/fbQNZjDD/prise6.jpg',
      image_alt: t('disciplines.mma.image_alt'),
      features_title: t('disciplines.mma.features_title'),
      features: [
        t('disciplines.mma.feature1'),
        t('disciplines.mma.feature2'),
        t('disciplines.mma.feature3'),
      ],
      ai_hint: 'mma combat'
    }
  ];

  return (
    <section id="disciplines" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline text-primary">{t('disciplines.title')}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {disciplines.map((discipline) => (
            <Card key={discipline.id} className="overflow-hidden shadow-lg border-2 border-transparent hover:border-primary transition-all duration-300">
              <CardHeader className="p-0">
                <div className="relative aspect-video bg-black">
                  <Image 
                    src={discipline.image}
                    alt={discipline.image_alt}
                    fill
                    className="object-contain"
                    data-ai-hint={discipline.ai_hint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-3xl font-headline mb-3">{discipline.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {discipline.description}
                </CardDescription>
                <h4 className="font-semibold mb-3">{discipline.features_title}</h4>
                <ul className="space-y-2 text-sm">
                  {discipline.features.map((feature, index) => (
                     <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                     </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
