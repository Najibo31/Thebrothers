
'use client';

import React, { useState, useEffect } from 'react';
import { useI18n } from '@/contexts/i18n-provider';
import { Button } from '@/components/ui/button';
import { X, Calendar, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const POPUP_STORAGE_KEY = 'handfight-promo-popup-timestamp-v2';
const COOLDOWN_HOURS = 5;

export default function PromoPopup() {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkPopup = () => {
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
  }, []);

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
          className="absolute right-2 top-2 z-10 hover:bg-primary/10 rounded-full"
        >
          <X className="h-6 w-6" />
        </Button>

        <div className="bg-primary/10 p-8 text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-2">
            <Sparkles className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-headline text-primary leading-tight">
            {t('events.popup.title')}
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground font-semibold">
            <Calendar className="h-5 w-5 text-primary" />
            <span>{t('events.popup.subtitle')}</span>
          </div>
        </div>

        <div className="p-8 text-center space-y-6">
          <p className="text-muted-foreground">
            {t('events.popup.description')}
          </p>
          
          <div className="flex flex-col gap-3">
            <Button size="lg" className="w-full font-bold shadow-lg shadow-primary/20" asChild onClick={() => setIsOpen(false)}>
              <Link href="/#events">
                {t('events.popup.cta')}
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground italic">
                {t('events.popup.footer')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
