
'use client';

import React, { useState, useEffect } from 'react';
import { useI18n } from '@/contexts/i18n-provider';
import { Button } from '@/components/ui/button';
import { X, Calendar, Rocket, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const POPUP_STORAGE_KEY = 'handfight-promo-popup-timestamp-v10';
const COOLDOWN_HOURS = 24;

export default function PromoPopup() {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkPopup = () => {
      // Check if there is actual content to show
      const title = t('events.popup.title');
      if (!title || title === 'events.popup.title' || title.trim() === '') {
        return;
      }

      const lastShown = localStorage.getItem(POPUP_STORAGE_KEY);
      const now = Date.now();
      
      if (!lastShown || now - parseInt(lastShown) > COOLDOWN_HOURS * 60 * 60 * 1000) {
        const timer = setTimeout(() => {
          setIsOpen(true);
          localStorage.setItem(POPUP_STORAGE_KEY, now.toString());
        }, 1500);
        return () => clearTimeout(timer);
      }
    };

    checkPopup();
  }, [t]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className={cn(
          "relative w-full max-w-md bg-background border-2 border-primary shadow-2xl rounded-2xl overflow-hidden",
          "animate-in zoom-in-95 slide-in-from-bottom-8 duration-500 ease-out"
        )}
      >
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsOpen(false)}
          className="absolute right-2 top-2 z-20 bg-background/50 backdrop-blur-sm hover:bg-secondary text-foreground rounded-full"
        >
          <X className="h-6 w-6" />
        </Button>

        <div className="flex flex-col h-full max-h-[90vh] overflow-y-auto">
          {/* Image/Flyer Section */}
          {t('events.popup.image') && (
            <div className="relative aspect-[3/4.2] w-full bg-black">
              <Image 
                src={t('events.popup.image')} 
                alt={t('events.popup.title')} 
                fill 
                className="object-contain"
                priority
              />
            </div>
          )}

          <div className="p-6 text-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-headline text-primary leading-tight uppercase tracking-wide">
                {t('events.popup.title')}
              </h2>
              {t('events.popup.subtitle') && (
              <div className="flex items-center justify-center gap-2 text-foreground font-bold">
                <Calendar className="h-5 w-5 text-primary" />
                <span>{t('events.popup.subtitle')}</span>
              </div>
              )}
            </div>

            <div className="bg-secondary/30 p-3 rounded-lg border border-primary/10">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t('events.popup.description')}
              </p>
            </div>
            
            <div className="pt-2 flex flex-col gap-2">
              <Button size="lg" className="w-full font-bold shadow-lg shadow-primary/20" asChild onClick={() => setIsOpen(false)}>
                <a href="https://www.helloasso.com/associations/the-brothers-handfight-international" target="_blank" rel="noopener noreferrer">
                  <Rocket className="mr-2 h-5 w-5" />
                  {t('events.popup.cta')}
                </a>
              </Button>
              <p className="text-[10px] text-muted-foreground italic font-medium">
                  {t('events.popup.footer')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
