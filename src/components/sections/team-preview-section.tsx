
'use client';
import { useI18n } from '@/contexts/i18n-provider';
import { Button } from '@/components/ui/button';
import { ArrowRight, Trophy, Users, Shield } from 'lucide-react';
import Link from 'next/link';

export default function TeamPreviewSection() {
  const { t } = useI18n();

  return (
    <section id="team" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-headline text-primary mb-6">
                {t('team.preview_title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                {t('team.preview_text')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center p-6 bg-secondary/50 rounded-xl transition-all hover:bg-secondary">
                    <Trophy className="h-10 w-10 text-primary mb-4" />
                    <h4 className="font-bold text-xl mb-2">Palmarès</h4>
                    <p className="text-sm text-muted-foreground text-center">Multiples titres nationaux et internationaux.</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-secondary/50 rounded-xl transition-all hover:bg-secondary">
                    <Users className="h-10 w-10 text-primary mb-4" />
                    <h4 className="font-bold text-xl mb-2">Communauté</h4>
                    <p className="text-sm text-muted-foreground text-center">Une équipe soudée et passionnée.</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-secondary/50 rounded-xl transition-all hover:bg-secondary">
                    <Shield className="h-10 w-10 text-primary mb-4" />
                    <h4 className="font-bold text-xl mb-2">Discipline</h4>
                    <p className="text-sm text-muted-foreground text-center">La rigueur au service de la réussite.</p>
                </div>
            </div>

            <Button asChild size="lg" className="group">
              <Link href="/equipe">
                {t('team.view_full_team')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
