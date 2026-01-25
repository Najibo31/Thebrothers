'use client';
import { useI18n } from '@/contexts/i18n-provider';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Award, Shield, Medal, Trophy, Star, Heart } from 'lucide-react';
import { Button } from '../ui/button';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-2xl font-headline text-primary mb-4">{children}</h3>
);

const RecordItem = ({ year, achievement, children, medal }: { year?: string, achievement: string, children: React.ReactNode, medal?: React.ReactNode }) => (
  <li className="flex items-start gap-4">
    <div className="flex-shrink-0 mt-1">{medal || <Award className="h-5 w-5 text-primary" />}</div>
    <div>
        {year && <p className="font-bold text-sm text-primary">{year}</p>}
        <p className="font-semibold">{achievement}</p>
        <p className="text-sm text-muted-foreground">{children}</p>
    </div>
  </li>
);

export default function TeamSection() {
  const { t } = useI18n();

  const handuRecords = [
    { year: '2019', achievement: t('team.handu.record1.achievement'), description: t('team.handu.record1.description') },
    { year: '2018', achievement: t('team.handu.record2.achievement'), description: t('team.handu.record2.description') },
    { year: '2017', achievement: t('team.handu.record3.achievement'), description: t('team.handu.record3.description') },
    { year: '2015-2019', achievement: t('team.handu.record4.achievement'), description: t('team.handu.record4.description') },
  ];

  const handuRecordsEurope = [
     { year: '2025', achievement: t('team.handu.record5.achievement'), description: t('team.handu.record5.description') },
     { year: '2024', achievement: t('team.handu.record6.achievement'), description: t('team.handu.record6.description') },
     { year: '2023', achievement: t('team.handu.record7.achievement'), description: t('team.handu.record7.description') },
     { year: '2022', achievement: t('team.handu.record8.achievement'), description: t('team.handu.record8.description') },
  ];

  const teamRecordsEurope = [
    { achievement: t('team.handu.record_europe_2022.achievement'), description: t('team.handu.record_europe_2022.description') },
    { achievement: t('team.handu.record_europe_2023.achievement'), description: t('team.handu.record_europe_2023.description') },
  ]

  const teamRecordsSA = [
    { achievement: t('team.handu.record_sa_2019.achievement'), description: t('team.handu.record_sa_2019.description') },
  ]

  const champions = [
    {
      name: 'Erickson "Bebê" Lafeuille',
      title: t('team.champion1.title'),
      description: t('team.champion1.description'),
      image: 'https://i.postimg.cc/fb4kS97r/erickson-lafeuille-(1).jpg',
      alt: 'Erickson "Bebê" Lafeuille',
      records: [
        { achievement: t('team.champion1.record1.achievement'), description: t('team.champion1.record1.description') },
        { achievement: t('team.champion1.record2.achievement'), description: t('team.champion1.record2.description') },
        { achievement: t('team.champion1.record3.achievement'), description: t('team.champion1.record3.description') },
      ],
      ai_hint: 'champion jjb'
    },
    {
      name: 'Mathieu Peraste',
      title: t('team.champion2.title'),
      description: t('team.champion2.description'),
      image: 'https://i.postimg.cc/hjZBTFWx/prise3.jpg',
      alt: 'Mathieu Peraste',
      records: [
        { achievement: t('team.champion2.record1.achievement'), description: t('team.champion2.record1.description') },
        { achievement: t('team.champion2.record2.achievement'), description: t('team.champion2.record2.description') },
        { achievement: t('team.champion2.record3.achievement'), description: t('team.champion2.record3.description') },
      ],
      ai_hint: 'athlete jjb'
    }
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Handu Section */}
        <div className="flex flex-col items-center text-center gap-8 lg:gap-12 mb-24">
          <div className="md:col-span-2 max-w-md">
            <Image 
              src="https://i.postimg.cc/W3TRQNjJ/prise88.jpg"
              alt={t('team.handu.name')}
              width={600}
              height={800}
              className="rounded-lg shadow-2xl w-full h-auto object-contain"
              data-ai-hint="professeur jjb"
            />
          </div>
          <div className="md:col-span-3 space-y-8 max-w-3xl">
            <div>
              <p className="font-semibold text-primary">{t('team.handu.role')}</p>
              <h2 className="text-4xl md:text-5xl font-headline mt-1">{t('team.handu.name')}</h2>
              <p className="mt-4 text-lg text-muted-foreground sm:text-left">{t('team.handu.bio')}</p>
            </div>
            
            <div>
              <SectionTitle>{t('team.handu.philosophy_title')}</SectionTitle>
              <ul className="space-y-2 text-left">
                <li className="flex items-center gap-3"><Trophy className="h-5 w-5 text-primary" /> {t('team.handu.philosophy1')}</li>
                <li className="flex items-center gap-3"><Shield className="h-5 w-5 text-primary" /> {t('team.handu.philosophy2')}</li>
                <li className="flex items-center gap-3"><Heart className="h-5 w-5 text-primary" /> {t('team.handu.philosophy3')}</li>
                <li className="flex items-center gap-3"><Award className="h-5 w-5 text-primary" /> {t('team.handu.philosophy4')}</li>
              </ul>
            </div>

            <div>
              <SectionTitle>{t('team.handu.records_title')}</SectionTitle>
              <div className="grid sm:grid-cols-2 gap-8 text-left">
                <ul className="space-y-4">
                  <p className="font-bold">{t('team.handu.records_before_2023')}</p>
                  {handuRecords.map((record, i) => <RecordItem key={i} year={record.year} achievement={record.achievement}>{record.description}</RecordItem>)}
                </ul>
                 <ul className="space-y-4">
                  <p className="font-bold">{t('team.handu.records_since_2022')}</p>
                  {handuRecordsEurope.map((record, i) => <RecordItem key={i} year={record.year} achievement={record.achievement}>{record.description}</RecordItem>)}
                </ul>
              </div>
            </div>
             <div>
              <SectionTitle>{t('team.team_records_title')}</SectionTitle>
              <div className="grid sm:grid-cols-2 gap-8 text-left">
                <ul className="space-y-4">
                  <p className="font-bold">{t('team.records_europe')}</p>
                  {teamRecordsEurope.map((record, i) => <RecordItem key={i} achievement={record.achievement}>{record.description}</RecordItem>)}
                </ul>
                 <ul className="space-y-4">
                  <p className="font-bold">{t('team.records_south_america')}</p>
                  {teamRecordsSA.map((record, i) => <RecordItem key={i} achievement={record.achievement}>{record.description}</RecordItem>)}
                </ul>
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
          {champions.map((champion, index) => (
            <Card key={index} className="shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 relative h-64 md:h-full">
                   <Image 
                      src={champion.image}
                      alt={champion.alt}
                      fill
                      className="object-contain"
                      data-ai-hint={champion.ai_hint}
                   />
                </div>
                <div className="md:col-span-3">
                  <CardHeader>
                    <CardTitle className="text-2xl font-headline">{champion.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">{champion.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm">{champion.description}</p>
                    <h4 className="font-semibold mb-3">{t('team.champion_records_title')}</h4>
                    <ul className="space-y-3">
                        {champion.records.map((record, i) => (
                            <RecordItem key={i} achievement={record.achievement} medal={<Star className="h-5 w-5 text-primary" />}>{record.description}</RecordItem>
                        ))}
                    </ul>
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
