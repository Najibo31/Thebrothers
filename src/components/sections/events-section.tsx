'use client';
import { useI18n } from '@/contexts/i18n-provider';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Newspaper } from 'lucide-react';
import Image from 'next/image';

export default function EventsSection() {
  const { t } = useI18n();

  const upcomingEvents = [
    { date: t('events.upcoming1.date'), title: t('events.upcoming1.title'), location: t('events.upcoming1.location'), hint: "logo championnat france" },
    { date: t('events.upcoming2.date'), title: t('events.upcoming2.title'), location: t('events.upcoming2.location'), hint: "logo open caraibes" },
    { date: t('events.upcoming3.date'), title: t('events.upcoming3.title'), location: t('events.upcoming3.location'), hint: "stage jjb" },
  ];

  const latestNews = [
    { date: t('events.news1.date'), title: t('events.news1.title'), description: t('events.news1.description'), hint: "podium compétition" },
    { date: t('events.news2.date'), title: t('events.news2.title'), description: t('events.news2.description'), hint: "entrainement intense" },
  ];

  return (
    <section id="events" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline text-primary">{t('events.title')}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Upcoming Events */}
          <div className="space-y-8">
            <h3 className="text-3xl font-headline flex items-center gap-3">
              <Calendar className="h-8 w-8 text-primary/80" />
              {t('events.upcoming_title')}
            </h3>
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="flex items-center gap-4 p-4 shadow-md">
                 <div className="relative h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0">
                    <Image
                      src={`https://picsum.photos/seed/event${index}/200/200`}
                      alt={event.title}
                      fill
                      className="rounded-md object-cover"
                      data-ai-hint={event.hint}
                    />
                 </div>
                <div>
                  <p className="text-sm font-semibold text-primary">{event.date}</p>
                  <h4 className="font-bold">{event.title}</h4>
                  <p className="text-sm text-muted-foreground">{event.location}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Latest News */}
          <div className="space-y-8">
            <h3 className="text-3xl font-headline flex items-center gap-3">
              <Newspaper className="h-8 w-8 text-primary/80" />
              {t('events.news_title')}
            </h3>
            {latestNews.map((news, index) => (
              <Card key={index} className="shadow-md">
                <CardHeader>
                   <div className="relative aspect-[16/9] mb-4">
                     <Image
                      src={`https://picsum.photos/seed/news${index}/800/450`}
                      alt={news.title}
                      fill
                      className="rounded-t-lg object-cover"
                      data-ai-hint={news.hint}
                    />
                   </div>
                  <p className="text-sm font-semibold text-primary">{news.date}</p>
                  <CardTitle>{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{news.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

         <div className="text-center mt-12">
            <Button size="lg">{t('events.connect_button')}</Button>
        </div>
      </div>
    </section>
  );
}
