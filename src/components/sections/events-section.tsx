
'use client';
import { useI18n } from '@/contexts/i18n-provider';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Newspaper, Star, Clock, Users, ShieldCheck, Phone, Info, Link as LinkIcon, Globe, MapPin, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function EventsSection() {
  const { t } = useI18n();

  const summerCamp = t('events.upcoming_summer');

  const otherEvents = [
    { date: t('events.upcoming1.date'), title: t('events.upcoming1.title'), location: t('events.upcoming1.location') },
    { date: t('events.upcoming2.date'), title: t('events.upcoming2.title'), location: t('events.upcoming2.location') },
    { date: t('events.upcoming4.date'), title: t('events.upcoming4.title'), location: t('events.upcoming4.location') },
  ].filter(event => event.title && event.title.length > 0);

  const latestNews = [
    { date: t('events.news_france.date'), title: t('events.news_france.title'), description: t('events.news_france.description') },
  ].filter(item => item.date && item.title && item.title.length > 0);

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
            
            {/* Featured Summer Camp */}
            <Card className="p-4 shadow-lg bg-background border-primary border-2 shadow-primary/20 transition-all hover:scale-[1.01]">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="p-4 rounded-lg flex-shrink-0 bg-primary text-white">
                   <Star className="h-8 w-8" />
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <p className="text-sm font-semibold text-primary">{summerCamp.date}</p>
                  <h4 className="font-bold text-xl">{summerCamp.title}</h4>
                  <p className="text-sm text-muted-foreground flex items-center justify-center sm:justify-start gap-1">
                    <MapPin className="h-3 w-3" /> {summerCamp.location}
                  </p>
                </div>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Info className="h-4 w-4 mr-2" />
                        {summerCamp.learn_more}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl bg-background border-primary max-h-[90vh] flex flex-col p-0">
                      <DialogHeader className="p-6 border-b">
                        <DialogTitle className="text-2xl font-headline text-primary">{summerCamp.modal.title}</DialogTitle>
                        <DialogDescription className="sr-only">Pedagogical guide for Summer Camp 2026</DialogDescription>
                      </DialogHeader>
                      <ScrollArea className="flex-1 p-6">
                        <div className="space-y-8">
                           {/* Info Grid */}
                           <div className="grid sm:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <h5 className="font-bold flex items-center gap-2"><Globe className="h-4 w-4 text-primary" /> {summerCamp.modal.languages_label}</h5>
                                <p className="text-sm text-muted-foreground">{summerCamp.modal.languages}</p>
                              </div>
                              <div className="space-y-2">
                                <h5 className="font-bold flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> {summerCamp.modal.hours_label}</h5>
                                <p className="text-sm text-muted-foreground">{summerCamp.modal.hours}</p>
                              </div>
                           </div>

                           {/* Weeks */}
                           <div className="space-y-3">
                              <h5 className="font-bold border-b pb-1">{summerCamp.modal.weeks_label}</h5>
                              <div className="grid grid-cols-2 gap-2">
                                {summerCamp.modal.weeks.map((week: string, i: number) => (
                                  <div key={i} className="text-sm p-2 bg-secondary/30 rounded border">{week}</div>
                                ))}
                              </div>
                           </div>

                           {/* Program */}
                           <div className="space-y-3">
                              <h5 className="font-bold border-b pb-1">{summerCamp.modal.program_label}</h5>
                              <ul className="space-y-2">
                                {summerCamp.modal.program.map((item: string, i: number) => (
                                  <li key={i} className="text-sm flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                           </div>

                            {/* Daily Schedule */}
                            <div className="space-y-3">
                              <h5 className="font-bold border-b pb-1">{summerCamp.modal.rhythm_title}</h5>
                              <div className="space-y-1">
                                {summerCamp.modal.rhythm.map((item: string, i: number) => (
                                  <div key={i} className="text-sm flex justify-between p-1 hover:bg-secondary/20">
                                    {item}
                                  </div>
                                ))}
                              </div>
                           </div>

                           {/* Rates */}
                           <div className="space-y-3">
                              <h5 className="font-bold border-b pb-1">{summerCamp.modal.rates_label}</h5>
                              <div className="grid grid-cols-2 gap-4">
                                {summerCamp.modal.rates.map((rate: string, i: number) => (
                                  <div key={i} className="font-bold text-primary">{rate}</div>
                                ))}
                              </div>
                           </div>

                           <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                              <p className="text-sm italic text-muted-foreground text-center">{summerCamp.modal.footer}</p>
                           </div>
                        </div>
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>

                  <Button variant="default" size="sm" asChild>
                    <a href="https://www.helloasso.com/associations/the-brothers-handfight-international" target="_blank" rel="noopener noreferrer">
                      <LinkIcon className="h-4 w-4 mr-2" />
                      {summerCamp.cta}
                    </a>
                  </Button>
              </div>
            </Card>

            {/* Other events */}
            {otherEvents.map((event, index) => (
              <Card key={index} className="flex flex-col sm:flex-row items-center gap-4 p-4 shadow-md bg-background transition-all hover:shadow-lg">
                <div className="p-4 rounded-lg flex-shrink-0 bg-primary/10 text-primary">
                   <Calendar className="h-8 w-8" />
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <p className="text-sm font-semibold text-primary">{event.date}</p>
                  <h4 className="font-bold text-lg">{event.title}</h4>
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
            {latestNews.length > 0 ? latestNews.map((news, index) => (
              <Card key={index} className="shadow-md overflow-hidden bg-background border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <p className="text-sm font-semibold text-primary">{news.date}</p>
                  <CardTitle>{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base">{news.description}</CardDescription>
                </CardContent>
              </Card>
            )) : (
              <p className="text-muted-foreground italic">{t('events.no_news')}</p>
            )}
          </div>
        </div>

         <div className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="https://wa.me/590691275351" target="_blank" rel="noopener noreferrer">
                <Phone className="h-5 w-5 mr-2" />
                {t('events.connect_button')}
              </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
