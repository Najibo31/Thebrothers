'use client';
import { useI18n } from '@/contexts/i18n-provider';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Award, Shield, Heart, Trophy, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-3xl md:text-4xl font-headline text-primary mb-8 text-center">{children}</h3>
);

const RecordItem = ({ achievement, children }: { achievement: string, children: React.ReactNode }) => (
  <li className="flex items-start gap-4">
    <div className="flex-shrink-0 mt-1"><Award className="h-5 w-5 text-primary" /></div>
    <div>
        <p className="font-semibold">{achievement}</p>
        <p className="text-sm text-muted-foreground">{children}</p>
    </div>
  </li>
);

export default function TeamSection() {
  const { t } = useI18n();

  const handu = t('team.handu');
  const champions = t('team.champions');
  const teamRecords = t('team.team_records');

  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Handu Section */}
        <div className="flex flex-col items-center text-center gap-8 lg:gap-12 mb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="col-span-2 md:col-span-1 bg-black rounded-lg">
              <Image 
                src={handu.gallery[0].src}
                alt={handu.gallery[0].alt}
                width={600}
                height={800}
                className="w-full h-full object-contain object-center"
                data-ai-hint="professeur jjb"
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
                <div className="bg-black rounded-lg">
                    <Image 
                    src={handu.gallery[1].src}
                    alt={handu.gallery[1].alt}
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-full object-contain"
                    />
                </div>
                <div className="bg-black rounded-lg">
                    <Image 
                    src={handu.gallery[2].src}
                    alt={handu.gallery[2].alt}
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-full object-contain"
                    />
                </div>
            </div>
            <div className="bg-black rounded-lg hidden md:block">
             <Image 
              src={handu.gallery[3].src}
              alt={handu.gallery[3].alt}
              width={600}
              height={800}
              className="rounded-lg shadow-2xl w-full h-full object-contain"
            />
            </div>
          </div>

          <div className="space-y-8 max-w-4xl">
            <div>
              <p className="font-semibold text-primary">{handu.role}</p>
              <h2 className="text-4xl md:text-5xl font-headline mt-1">{handu.name}</h2>
              <p className="mt-4 text-lg text-muted-foreground text-left">{handu.bio}</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-headline text-primary mb-4">{handu.philosophy_title}</h3>
              <ul className="space-y-2 text-left sm:columns-2">
                <li className="flex items-center gap-3"><Trophy className="h-5 w-5 text-primary" /> {handu.philosophy1}</li>
                <li className="flex items-center gap-3"><Shield className="h-5 w-5 text-primary" /> {handu.philosophy2}</li>
                <li className="flex items-center gap-3"><Heart className="h-5 w-5 text-primary" /> {handu.philosophy3}</li>
                <li className="flex items-center gap-3"><Award className="h-5 w-5 text-primary" /> {handu.philosophy4}</li>
              </ul>
            </div>

            <div className="space-y-12">
              <SectionTitle>{handu.palmares_title}</SectionTitle>

              {/* Timeline "Avant 2023" */}
              <div className="space-y-8">
                  <div className="text-center">
                      <span className="inline-block px-4 py-1 text-sm font-semibold border-2 border-primary text-primary rounded-md">{handu.palmares_avant_2023}</span>
                  </div>
                  <div className="relative py-4">
                      <div className="absolute top-4 left-0 right-0 h-0.5 bg-primary/30 mx-auto w-full md:w-10/12 hidden md:block"></div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                          {handu.palmares_avant.map((record: any, index: number) => (
                              <div key={index} className="relative flex flex-col items-center text-center px-2">
                                  <div className="absolute top-0 -translate-y-1/2 w-4 h-4 rounded-full bg-primary z-10 border-4 border-background hidden md:block"></div>
                                  <div className="pt-8">
                                      <h4 className="font-bold text-xl">{record.year} - {record.title}</h4>
                                      <p className="text-primary font-semibold mt-1">{record.achievement}</p>
                                      <p className="text-sm text-muted-foreground mt-2">{record.description}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>

              {/* Grid "Depuis 2022" */}
              <div className="space-y-8">
                  <div className="text-center">
                      <span className="inline-block px-4 py-1 text-sm font-semibold border-2 border-primary text-primary rounded-md">{handu.palmares_depuis_2022}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[handu.palmares_2025, handu.palmares_2024, handu.palmares_2023].map((record: any) => (
                        <div key={record.year} className="p-6 border-2 border-primary/50 rounded-lg text-center flex flex-col justify-center">
                            <h4 className="font-bold text-2xl mb-4">{record.year}</h4>
                            <ul className="space-y-2">
                                {record.items.map((item: any, i: number) => (
                                    <li key={i} className="font-semibold">
                                        {item.title}
                                        {item.result && <span className="text-primary font-bold block"> {item.result}</span>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                  </div>

                  <div className="p-6 border-2 border-primary/50 rounded-lg text-center">
                      <h4 className="font-bold text-2xl mb-4">{handu.palmares_2022.year}</h4>
                      <ul className="space-y-2">
                          {handu.palmares_2022.items.map((item: any, i: number) => (
                              <li key={i} className="font-semibold">
                                  {item.title}
                                  {item.result && <span className="text-primary font-bold block"> {item.result}</span>}
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
            </div>

            <div>
              <SectionTitle>{teamRecords.title}</SectionTitle>
              <div className="grid sm:grid-cols-2 gap-8 text-left">
                <div>
                    <h4 className="font-bold mb-4 text-xl">{teamRecords.europe.title}</h4>
                    <ul className="space-y-4">
                        {teamRecords.europe.items.map((record: any, i: number) => <RecordItem key={i} achievement={record.achievement}>{record.description}</RecordItem>)}
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4 text-xl">{teamRecords.south_america.title}</h4>
                    <ul className="space-y-4">
                        {teamRecords.south_america.items.map((record: any, i: number) => <RecordItem key={i} achievement={record.achievement}>{record.description}</RecordItem>)}
                    </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                 <RecordItem achievement={teamRecords.caribbean.achievement}>{teamRecords.caribbean.description}</RecordItem>
              </div>
            </div>
          </div>
        </div>

        {/* Student Champions Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline text-primary">{t('team.champions_title')}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">{t('team.champions_subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {champions.map((champion: any, index: number) => (
            <Card key={index} className="shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-5">
                {champion.image && (
                  <div className="md:col-span-2 relative bg-black">
                    <Image 
                        src={champion.image}
                        alt={champion.alt}
                        width={600}
                        height={800}
                        className="w-full h-auto md:w-full md:h-full md:object-contain"
                        data-ai-hint={champion.ai_hint}
                    />
                  </div>
                )}
                <div className={cn("md:col-span-3", !champion.image && "md:col-span-5")}>
                  <CardHeader>
                    <CardTitle className="text-2xl font-headline">{champion.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">{champion.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm">{champion.description}</p>
                    {champion.records && champion.records.length > 0 && (
                      <>
                        <h4 className="font-semibold mb-3">{t('team.champion_records_title')}</h4>
                        <ul className="space-y-3">
                            {champion.records.map((record: any, i: number) => (
                                <li key={i} className="flex items-start gap-3">
                                  <Star className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                  <div>
                                    <p className="font-semibold">{record.achievement}</p>
                                    {record.description && <p className="text-sm text-muted-foreground">{record.description}</p>}
                                  </div>
                                </li>
                            ))}
                        </ul>
                      </>
                    )}
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button size="lg">{t('team.cta_button')}</Button>
        </div>
      </div>
    </section>
  );
}
