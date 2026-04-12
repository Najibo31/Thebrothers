
'use client';
import { useI18n } from '@/contexts/i18n-provider';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Newspaper, Star, Clock, Users, ShieldCheck, Phone, Info } from 'lucide-react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function EventsSection() {
  const { t } = useI18n();

  const camp = t('events.camp');
  const details = camp.camp_details;
  
  const upcomingEvents = [
    { date: t('events.upcoming1.date'), title: t('events.upcoming1.title'), location: t('events.upcoming1.location') },
    { date: t('events.upcoming2.date'), title: t('events.upcoming2.title'), location: t('events.upcoming2.location') },
    { date: t('events.upcoming3.date'), title: t('events.upcoming3.title'), location: t('events.upcoming3.location') },
  ];

  const latestNews = [
    { date: t('events.news3.date'), title: t('events.news3.title'), description: t('events.news3.description'), image: 'https://i.postimg.cc/Hk5mQVK7/Jessica.jpg' },
    { date: t('events.news1.date'), title: t('events.news1.title'), description: t('events.news1.description'), image: 'https://i.postimg.cc/Y993Ym9Z/Whats_App_Image_2026-01-26_at_01_34_43.jpg' },
    { date: t('events.news2.date'), title: t('events.news2.title'), description: t('events.news2.description') },
  ].filter(item => item.date && item.title);


  return (
    <section id="events" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline text-primary">{t('events.title')}</h2>
        </div>

        {/* Featured Camp Event */}
        <Card className="mb-24 border-primary border-2 shadow-2xl overflow-hidden bg-background">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                <Star className="h-4 w-4" />
                {camp.featured_title}
              </div>
              <h3 className="text-4xl font-headline mb-4">{camp.title}</h3>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {camp.subtitle}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <Calendar className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold">{camp.dates}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold">{camp.hours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold">{camp.public}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold">{camp.priority || t('about.mission2')}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a href="https://wa.me/590691275351" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" /> {camp.cta}
                  </a>
                </Button>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
                      <Info className="mr-2 h-5 w-5" /> {details.cta_more}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col p-0 bg-background/95 backdrop-blur-sm border-primary">
                    <DialogHeader className="p-6 pb-0 flex-shrink-0">
                      <DialogTitle className="text-3xl font-headline text-primary">{details.modal_title}</DialogTitle>
                      <DialogDescription>{details.modal_description}</DialogDescription>
                    </DialogHeader>
                    
                    <div className="flex-grow overflow-hidden mt-4">
                      <ScrollArea className="h-full w-full px-6">
                        <div className="space-y-10 pb-10">
                          {/* Structure Type */}
                          <div>
                            <h4 className="text-2xl font-headline text-primary mb-4 flex items-center gap-2">
                              <Clock className="h-6 w-6" /> {details.structure_title}
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                              {details.structure_items.map((item: string, i: number) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-md bg-secondary/50 border border-border">
                                  <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                  <span className="font-medium">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <Separator />

                          {/* Program Days */}
                          <div>
                            <h4 className="text-2xl font-headline text-primary mb-6 flex items-center gap-2">
                              <Calendar className="h-6 w-6" /> {camp.days_title}
                            </h4>
                            <div className="space-y-6">
                              {details.days.map((day: any, i: number) => (
                                <div key={i} className="border-l-4 border-primary pl-4 py-2 bg-secondary/20 rounded-r-lg">
                                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{day.name}</p>
                                  <h5 className="font-bold text-lg mb-2">{day.title}</h5>
                                  <p className="text-sm text-muted-foreground leading-relaxed">{day.desc}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          <Separator />

                          {/* Safety Rules */}
                          <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                            <h4 className="text-2xl font-headline text-primary mb-4 flex items-center gap-2">
                              <ShieldCheck className="h-6 w-6" /> {details.safety_title}
                            </h4>
                            <ul className="grid sm:grid-cols-2 gap-4 text-sm">
                              {details.safety_items.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-3">
                                  <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="font-medium">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </ScrollArea>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            <div className="relative h-96 lg:h-auto min-h-[500px]">
              <Image 
                src="https://i.postimg.cc/hj7TxBNp/entrainement2.jpg" 
                alt={camp.title}
                fill
                className="object-cover"
                data-ai-hint="enfants club jjb"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-l"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-sm font-bold uppercase tracking-widest text-primary-foreground mb-2">{camp.structure_title}</p>
                <p className="text-lg font-medium max-w-sm">{camp.structure_text}</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Upcoming Events */}
          <div className="space-y-8">
            <h3 className="text-3xl font-headline flex items-center gap-3">
              <Calendar className="h-8 w-8 text-primary/80" />
              {t('events.upcoming_title')}
            </h3>
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="flex items-center gap-4 p-4 shadow-md bg-background">
                <div className="p-4 bg-primary/10 rounded-lg">
                   <Calendar className="h-8 w-8 text-primary" />
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
            {latestNews.map((news: any, index) => (
              <Card key={index} className="shadow-md overflow-hidden bg-background">
                <CardHeader>
                  <p className="text-sm font-semibold text-primary">{news.date}</p>
                  <CardTitle>{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{news.description}</CardDescription>
                  {news.image && (
                    <div className="mt-4 relative aspect-video rounded-lg overflow-hidden bg-black">
                       <Image
                          src={news.image}
                          alt={news.title}
                          fill
                          className="object-contain"
                        />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
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
