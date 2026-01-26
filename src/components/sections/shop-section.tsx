'use client';
import { useI18n } from '@/contexts/i18n-provider';
import Image from 'next/image';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

type Product = {
  name: string;
  price: string;
  image: string;
  hint: string;
  description: string;
}

export default function ShopSection() {
  const { t } = useI18n();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = t('shop.products');

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
                            <CardHeader className="p-0 cursor-pointer" onClick={() => setSelectedProduct(product)}>
                               <div className="relative aspect-square">
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  fill
                                  className="object-contain rounded-t-lg p-4"
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
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
            </Carousel>
             {selectedProduct && (
                <DialogContent className="max-w-4xl bg-background/90 backdrop-blur-sm border-primary">
                    <DialogHeader>
                        <DialogTitle className="sr-only">{selectedProduct.name}</DialogTitle>
                        <DialogDescription className="sr-only">
                            {t('shop.enlarged_view')} {selectedProduct.name}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div className="relative aspect-square">
                          <Image src={selectedProduct.image} alt={selectedProduct.name} fill className="object-contain" />
                      </div>
                      <div className="space-y-4">
                        <h2 className="text-3xl font-headline text-primary">{selectedProduct.name}</h2>
                        <p className="text-3xl font-bold">{selectedProduct.price} €</p>
                        <p className="text-muted-foreground">{selectedProduct.description}</p>
                         <Button asChild size="lg" className="w-full">
                            <a href="https://wa.me/590691275351" target="_blank" rel="noopener noreferrer">
                                <ShoppingCart className="mr-2 h-5 w-5" /> {t('shop.cta_button')}
                            </a>
                        </Button>
                      </div>
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
