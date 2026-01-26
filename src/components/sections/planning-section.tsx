'use client';
import { useI18n } from '@/contexts/i18n-provider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export default function PlanningSection() {
  const { t, locale } = useI18n();
  
  const schedule = t('planning.schedule');

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
                      {schedule[day.key as keyof typeof schedule].map((session: any, index: number) => (
                        <div key={index} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left p-4 bg-background rounded-lg border">
                          <p className="font-bold text-base sm:text-lg">{session.time}</p>
                          <p className="text-primary font-semibold text-sm sm:text-base">{session.course}</p>
                        </div>
                      ))}
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
