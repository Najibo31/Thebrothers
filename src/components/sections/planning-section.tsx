
'use client';
import React, { useMemo } from 'react';
import { useI18n } from '@/contexts/i18n-provider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Anchor } from 'lucide-react';

export default function PlanningSection() {
  const { t } = useI18n();
  
  const schedule = t('planning.schedule');

  // Fonction pour déterminer si nous sommes dans une semaine de No-Gi pour les ados le vendredi
  // On utilise une date de référence : Vendredi 6 Décembre 2024 comme semaine A (No-Gi par exemple)
  const isNoGiWeek = useMemo(() => {
    const referenceDate = new Date('2024-12-06T00:00:00').getTime();
    const currentDate = new Date().getTime();
    const msInWeek = 7 * 24 * 60 * 60 * 1000;
    const weeksPassed = Math.floor((currentDate - referenceDate) / msInWeek);
    return weeksPassed % 2 === 0;
  }, []);

  const days = [
    { key: 'monday', label: t('planning.days.monday') },
    { key: 'tuesday', label: t('planning.days.tuesday') },
    { key: 'wednesday', label: t('planning.days.wednesday') },
    { key: 'thursday', label: t('planning.days.thursday') },
    { key: 'friday', label: t('planning.days.friday') },
    { key: 'saturday', label: t('planning.days.saturday') },
  ];

  return (
    <section id="planning" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline text-primary">{t('planning.title')}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t('planning.subtitle')}</p>
        </div>
        
        <Card className="shadow-xl">
          <Tabs defaultValue="monday" className="w-full">
            <div className="overflow-x-auto px-1">
              <TabsList className="grid w-full grid-cols-6 min-w-[600px]">
                {days.map(day => (
                  <TabsTrigger key={day.key} value={day.key}>{day.label}</TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {days.map(day => (
              <TabsContent key={day.key} value={day.key}>
                <CardContent className="pt-6">
                  {schedule[day.key as keyof typeof schedule]?.length > 0 ? (
                    <div className="space-y-4">
                      {schedule[day.key as keyof typeof schedule].map((session: any, index: number) => {
                        let courseName = session.course;
                        
                        // Logique spécifique pour le vendredi à 17h30 (alternance)
                        if (day.key === 'friday' && session.course === 'DYNAMIC_FRIDAY_TEENS') {
                          courseName = isNoGiWeek ? t('planning.friday_nogi') : t('planning.friday_jjb');
                        }

                        return (
                          <div key={index} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left p-4 bg-background rounded-lg border">
                            <p className="font-bold text-base sm:text-lg">{session.time}</p>
                            <p className="text-primary font-semibold text-sm sm:text-base">{courseName}</p>
                          </div>
                        );
                      })}
                      {day.key === 'friday' && (
                        <p className="text-xs text-muted-foreground italic mt-4 text-center">
                          {t('planning.alternating_note')}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-muted-foreground">{t('planning.no_class')}</p>
                    </div>
                  )}
                </CardContent>
              </TabsContent>
            ))}
          </Tabs>
        </Card>

        {/* Terre-de-Haut Section */}
        <div className="mt-12 p-8 bg-primary/5 rounded-2xl border-2 border-primary/20 shadow-lg text-center transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex justify-center mb-4">
                <Anchor className="h-12 w-12 text-primary animate-pulse" />
            </div>
            <h3 className="text-2xl font-headline text-primary mb-3">{t('planning.terre_de_haut_title')}</h3>
            <p className="text-xl font-bold mb-4">{t('planning.terre_de_haut_text')}</p>
            <p className="text-muted-foreground mb-6 font-semibold">{t('planning.terre_de_haut_contact')}</p>
            <Button asChild size="lg" className="shadow-primary/30 shadow-xl">
                <a href="https://wa.me/590690351346" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" /> WhatsApp Boris
                </a>
            </Button>
        </div>

        <div className="text-center mt-12 p-6 bg-background rounded-lg border border-dashed">
            <h3 className="text-xl font-semibold mb-2">{t('planning.trial_title')}</h3>
            <p className="text-muted-foreground mb-4">{t('planning.trial_text')}</p>
            <Button asChild>
                <a href="https://wa.me/590691275351" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" /> {t('planning.trial_button')}
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
