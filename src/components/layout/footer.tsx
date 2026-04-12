
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from '@/contexts/i18n-provider';
import { Instagram } from 'lucide-react';

export default function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4">
              <Image 
                src="https://i.postimg.cc/66DjvGX9/brothers.png" 
                alt="Hand Fight Logo" 
                width={80} 
                height={80}
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">{t('footer.association')}</p>
            <p className="text-sm text-muted-foreground">{t('footer.hq')}</p>
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://www.instagram.com/thebrothers_gwadabjj/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>&copy; {currentYear} {t('footer.copyright')}</p>
          <a href="https://www.croissancedigitale.pro/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <p>{t('footer.made_by')}</p>
            <Image 
              src="https://i.postimg.cc/J4dnF46r/Digitale-Recupere.png" 
              alt="Croissance Digitale Logo" 
              width={20} 
              height={20}
            />
          </a>
          <p>{t('footer.editor')}: Diana Penalva Camacho</p>
        </div>
      </div>
    </footer>
  );
}
