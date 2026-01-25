'use client';
import { useI18n } from '@/contexts/i18n-provider';
import Image from 'next/image';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export default function ShopSection() {
  const { t } = useI18n();
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  const products = [
    { name: t('shop.product1.name'), price: t('shop.product1.price'), image: 'https://i.postimg.cc/859nX5nr/pantalon.png', hint: "legging sport" },
    { name: t('shop.product2.name'), price: t('shop.product2.price'), image: 'https://i.postimg.cc/ZR2DsRDW/T_shirt2.png', hint: "rashguard" },
    { name: t('shop.product3.name'), price: t('shop.product3.price'), image: 'https://i.postimg.cc/1t2Y7tYq/T_shirt.png', hint: "t-shirt sport" },
    { name: t('shop.product4.name'), price: t('shop.product4.price'), image: 'https://i.postimg.cc/Ss3t1st8/short.png', hint: "short sport" },
  ];

  return (
    <section id="shop" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline text-primary">{t('shop.title')}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t('shop.subtitle')}</p>
        </div>
        
        <Dialog>
            <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full"
            >
            <CarouselContent>
                {products.map((product, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="p-1">
                    <Card className="shadow-lg h-full flex flex-col">
                        <DialogTrigger asChild>
                            <CardHeader className="p-0 cursor-pointer" onClick={() => setSelectedImage({src: product.image, alt: product.name})}>
                               <div className="relative aspect-square">
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  fill
                                  className="object-contain rounded-t-lg"
                                  data-ai-hint={product.hint}
                                />
                               </div>
                            </CardHeader>
                        </DialogTrigger>
                        <CardContent className="p-4 flex flex-col flex-grow items-center text-center">
                        <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
                        <CardDescription className="text-primary font-bold text-xl mt-2">{product.price} €</CardDescription>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
             {selectedImage && (
                <DialogContent className="max-w-2xl bg-transparent border-none shadow-none">
                    <DialogHeader>
                        <DialogTitle className="sr-only">{selectedImage.alt}</DialogTitle>
                        <DialogDescription className="sr-only">
                            {t('shop.enlarged_view')}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="relative aspect-square mt-4">
                        <Image src={selectedImage.src} alt={selectedImage.alt} fill className="object-contain" />
                    </div>
                </DialogContent>
            )}
        </Dialog>

        <div className="text-center mt-12">
            <Button asChild size="lg">
                <a href="https://wa.me/590691275351" target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="mr-2 h-5 w-5" /> {t('shop.cta_button')}
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
