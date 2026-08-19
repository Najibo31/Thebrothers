'use client';

import React, { useState, useEffect } from 'react';
import { useI18n } from '@/contexts/i18n-provider';
import { Button } from '@/components/ui/button';
import { X, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const POPUP_STORAGE_KEY = 'handfight-promo-popup-timestamp-v3';
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

  const images = [
    "https://i.postimg.cc/LXvGsxHG/Gemini-Generated-Image-mdymdpmdymdpmdym.jpg",
    "https://i.postimg.cc/d1ng05qz/Gemini-Generated-Image-ay4zteay4zteay4z.jpg"
  ];

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
          className="absolute right-2 top-2 z-20 bg-black/20 hover:bg-black/40 text-white rounded-full"
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Image Carousel - Ratio 4:3 for Portrait images visibility */}
        <div className="relative w-full aspect-[4/3] bg-black">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full h-full"
          >
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-full aspect-[4/3]">
                    <Image
                      src={src}
                      alt="Initiation JJB"
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="p-6 text-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline text-primary leading-tight uppercase tracking-wide">
              {t('events.popup.title')}
            </h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground font-semibold">
              <Calendar className="h-5 w-5 text-primary" />
              <span>{t('events.popup.subtitle')}</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {t('events.popup.description')}
          </p>
          
          <div className="pt-2 flex flex-col gap-3">
            <Button size="lg" className="w-full font-bold shadow-lg shadow-primary/20" asChild onClick={() => setIsOpen(false)}>
              <a href="https://wa.me/590691275351" target="_blank" rel="noopener noreferrer">
                {t('events.popup.cta')}
              </a>
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
