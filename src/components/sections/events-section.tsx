'use client';
import { useI18n } from '@/contexts/i18n-provider';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Newspaper, Star, Clock, Users, ShieldCheck, Phone, Info, Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function EventsSection() {
  const { t } = useI18n();

  const upcomingEvents = [
    { date: t('events.upcoming_summer.date'), title: t('events.upcoming_summer.title'), location: t('events.upcoming_summer.location'), cta: t('events.upcoming_summer.cta'), highlight: true },
    { date: t('events.upcoming1.date'), title: t('events.upcoming1.title'), location: t('events.upcoming1.location') },
    { date: t('events.upcoming2.date'), title: t('events.upcoming2.title'), location: t('events.upcoming2.location') },
    { date: t('events.upcoming4.date'), title: t('events.upcoming4.title'), location: t('events.upcoming4.location') },
  ].filter(event => event.title && event.title.length > 0 && event.title !== 'events.upcoming_summer.title');

  const latestNews = [
    { date: t('events.news_france.date'), title: t('events.news_france.title'), description: t('events.news_france.description') },
  ].filter(item => item.date && item.title && item.title.length > 0 && !item.title.startsWith('events.'));

  return (
    <section id="events" className="py-16 md:py-24 bg-secondary scroll-mt-24">
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
              <Card key={index} className={cn(
                "flex flex-col sm:flex-row items-center gap-4 p-4 shadow-md bg-background transition-all hover:shadow-lg",
                event.highlight && "border-primary border-2 shadow-primary/20"
              )}>
                <div className={cn(
                    "p-4 rounded-lg flex-shrink-0",
                    event.highlight ? "bg-primary text-white" : "bg-primary/10 text-primary"
                )}>
                   <Calendar className="h-8 w-8" />
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <p className="text-sm font-semibold text-primary">{event.date}</p>
                  <h4 className="font-bold text-lg">{event.title}</h4>
                  <p className="text-sm text-muted-foreground">{event.location}</p>
                </div>
                {event.cta && (
                    <Button variant={event.highlight ? "default" : "outline"} size="sm" className="mt-2 sm:mt-0" disabled>
                        <LinkIcon className="h-4 w-4 mr-2" />
                        {event.cta}
                    </Button>
                )}
              </Card>
            ))}
          </div>

          {/* Latest News */}
          <div className="space-y-8">
            <h3 className="text-3xl font-headline flex items-center gap-3">
              <Newspaper className="h-8 w-8 text-primary/80" />
              {t('events.news_title')}
            </h3>
            {latestNews.length > 0 ? latestNews.map((news, index) => (
              <Card key={index} className="shadow-md overflow-hidden bg-background border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <p className="text-sm font-semibold text-primary">{news.date}</p>
                  <CardTitle>{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base">{news.description}</CardDescription>
                  {news.image && (
                    <div className="mt-4 relative aspect-video rounded-lg overflow-hidden bg-black group">
                       <Image
                          src={news.image}
                          alt={news.title}
                          fill
                          className="object-contain transition-transform group-hover:scale-105"
                        />
                    </div>
                  )}
                </CardContent>
              </Card>
            )) : (
              <p className="text-muted-foreground italic">{t('events.no_news') || "Aucune actualité récente."}</p>
            )}
          </div>
        </div>

         <div className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="https://wa.me/590691275351" target="_blank" rel="noopener noreferrer">
                {t('events.connect_button')}
              </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
