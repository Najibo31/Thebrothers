'use client';
import { useI18n } from '@/contexts/i18n-provider';
import Image from 'next/image';

export default function GallerySection() {
  const { t } = useI18n();

  const images = [
    { src: 'https://i.postimg.cc/zvsv0kND/IMG-20260622-WA0001.jpg', alt: t('gallery.alt_new1'), hint: 'combat jjb compétition' },
    { src: 'https://i.postimg.cc/sxkxwJz2/IMG-20260622-WA0002.jpg', alt: t('gallery.alt_new2'), hint: 'podium victoire club' },
    { src: 'https://i.postimg.cc/hvkvp0nD/IMG-20260622-WA0003.jpg', alt: t('gallery.alt_new3'), hint: 'action technique jjb' },
    { src: 'https://i.postimg.cc/GtWtqjRc/IMG-20260622-WA0004.jpg', alt: t('gallery.alt_new4'), hint: 'médaille compétition' },
    { src: 'https://i.postimg.cc/3NsNnZhR/motion-photo-6433779559853723242.jpg', alt: t('gallery.alt_new5'), hint: 'combat dynamique' },
    { src: 'https://i.postimg.cc/2ysy2xYV/motion-photo-8953167880361739255.jpg', alt: t('gallery.alt_new6'), hint: 'groupe compétition jjb' },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline text-primary">{t('gallery.title')}</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">{t('gallery.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {images.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group bg-black aspect-[4/3]">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-contain transform transition-transform duration-300 group-hover:scale-110"
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
