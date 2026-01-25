'use client';
import { useI18n } from '@/contexts/i18n-provider';
import Image from 'next/image';

export default function GallerySection() {
  const { t } = useI18n();

  const images = [
    { src: 'https://i.postimg.cc/KYZSWcmK/tournoi.jpg', alt: t('gallery.alt1'), hint: 'tournoi jjb' },
    { src: 'https://i.postimg.cc/Pqts7fdw/podium.jpg', alt: t('gallery.alt2'), hint: 'podium victoire' },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline text-primary">{t('gallery.title')}</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">{t('gallery.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {images.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain transform transition-transform duration-300 group-hover:scale-110"
                        data-ai-hint={image.hint}
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
