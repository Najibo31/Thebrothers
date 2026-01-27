'use client';

import { useI18n } from '@/contexts/i18n-provider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Smartphone, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function ContactSection() {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline text-primary">{t('contact.title')}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t('contact.subtitle')}</p>
        </div>
        
        <Card className="overflow-hidden shadow-xl lg:grid lg:grid-cols-2">
            <div className="p-8 sm:p-12">
                <h3 className="text-2xl font-semibold mb-6">{t('contact.get_in_touch')}</h3>
                <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1"/>
                        <div>
                            <h4 className="font-semibold text-foreground">{t('contact.address_title')}</h4>
                            <p>{t('contact.address_line1')}</p>
                            <p>{t('contact.address_line2')}</p>
                            <p>{t('contact.address_line3')}</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-4">
                        <Smartphone className="h-6 w-6 text-primary flex-shrink-0"/>
                         <div>
                           <h4 className="font-semibold text-foreground">{t('contact.phone_title')}</h4>
                           <a href="tel:0691275351" className="hover:text-primary transition-colors">{t('contact.phone_number')}</a>
                        </div>
                    </div>
                     <div className="flex items-center gap-4">
                        <Smartphone className="h-6 w-6 text-primary flex-shrink-0"/>
                        <div>
                           <h4 className="font-semibold text-foreground">{t('contact.whatsapp_title')}</h4>
                           <a href="https://wa.me/590691275351" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t('contact.whatsapp_action')}</a>
                        </div>
                    </div>
                     <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-primary flex-shrink-0"/>
                         <div>
                           <h4 className="font-semibold text-foreground">{t('contact.email_title')}</h4>
                           <a href="mailto:handfight.bjj@gmail.com" className="hover:text-primary transition-colors">{t('contact.email_action')}</a>
                        </div>
                    </div>
                </div>
                 <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4 text-foreground">{t('contact.socials_title')}</h4>
                    <div className="flex space-x-4">
                        <Button asChild variant="outline" size="icon">
                            <a href="https://www.instagram.com/thebrothers_gwadabjj/" target="_blank" rel="noopener noreferrer">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="relative h-96 lg:h-full">
                 <Image 
                    src="https://i.postimg.cc/fb3Pcm8n/enfant.jpg"
                    alt={t('contact.map_alt')}
                    fill
                    className="object-cover"
                    data-ai-hint="enfants club jjb"
                />
            </div>
        </Card>
      </div>
    </section>
  );
}
