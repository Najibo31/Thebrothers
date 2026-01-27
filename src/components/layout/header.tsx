'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import React, { useState, useEffect } from 'react';
import { ThemeToggleButton } from '@/components/ui/theme-toggle-button';
import { LanguageSwitcher } from '@/components/language-switcher';
import { useI18n } from '@/contexts/i18n-provider';
import { cn } from '@/lib/utils';

export default function Header() {
  const { t } = useI18n();
  const navLinks = [
    { href: '/#about', label: t('nav.about') },
    { href: '/#disciplines', label: t('nav.courses') },
    { href: '/#planning', label: t('nav.planning') },
    { href: '/abonnements', label: t('nav.subscriptions') },
    { href: '/#shop', label: t('nav.shop') },
    { href: '/#team', label: t('nav.team') },
    { href: '/#events', label: t('nav.events') },
    { href: '/#contact', label: t('nav.contact') },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinksContent = ({ onLinkClick }: { onLinkClick?: () => void }) => (
    <>
      {navLinks.map((link) => {
        const isExternalPage = link.href.startsWith('/abonnements');
        return (
          <SheetClose key={link.href} asChild>
            <Link
              href={link.href}
              onClick={onLinkClick}
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:text-primary"
            >
              {link.label}
            </Link>
          </SheetClose>
        );
      })}
    </>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-sm border-b text-foreground"
          : "bg-transparent text-white"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="https://i.postimg.cc/66DjvGX9/brothers.png"
              alt="Hand Fight Logo"
              width={60}
              height={60}
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:text-primary">
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-1">
            <div className='hidden lg:flex items-center gap-1'>
              <LanguageSwitcher />
              <ThemeToggleButton />
            </div>

            <div className="flex items-center lg:hidden">
              <LanguageSwitcher />
              <ThemeToggleButton />
            </div>

            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">{t('nav.open_menu')}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-background">
                <SheetHeader>
                    <SheetTitle className="sr-only">{t('nav.open_menu')}</SheetTitle>
                    <SheetDescription className="sr-only">{t('nav.menu_description')}</SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col h-full">
                  <div className="flex justify-between items-center border-b pb-4">
                     <Link href="/" className="flex items-center gap-2">
                      <Image 
                        src="https://i.postimg.cc/66DjvGX9/brothers.png"
                        alt="Hand Fight Logo"
                        width={50}
                        height={50}
                      />
                    </Link>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                         <span className="sr-only">{t('nav.close_menu')}</span>
                      </Button>
                    </SheetClose>
                  </div>
                  <div className="flex flex-col gap-4 py-6">
                    <NavLinksContent />
                  </div>
                  <div className="mt-auto pt-6 text-center text-xs text-muted-foreground">
                    <a href="https://www.croissancedigitale.pro/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:text-primary transition-colors">
                       <p>{t('footer.made_by')}</p>
                       <Image 
                         src="https://i.postimg.cc/J4dnF46r/Digitale-Recupere.png" 
                         alt="Croissance Digitale Logo" 
                         width={20} 
                         height={20}
                         className=""
                       />
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
