'use client';
import { useI18n } from '@/contexts/i18n-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, User, Users, GraduationCap, Building, Briefcase } from 'lucide-react';
import Link from 'next/link';

const PlanCard = ({ title, price, description, features, highlight, cta, info }: { title: string, price: string, description?: string, features?: string[], highlight?: boolean, cta: string, info: string }) => (
    <Card className={`flex flex-col ${highlight ? 'border-primary border-2 shadow-primary/20' : ''}`}>
        <CardHeader>
            <CardTitle className="font-headline text-2xl">{title}</CardTitle>
            {description && <CardDescription className="text-primary font-bold">{description}</CardDescription>}
            <p className="text-4xl font-bold pt-2">{price}</p>
        </CardHeader>
        <CardContent className="flex-grow">
            {info && <p className="text-muted-foreground mb-4">{info}</p>}
            {features && (
                <ul className="space-y-2 text-sm">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            )}
        </CardContent>
        <CardFooter>
            <Button className="w-full" variant={highlight ? 'default' : 'secondary'} asChild>
              <a href="https://www.helloasso.com/associations/the-brothers-handfight-international" target="_blank" rel="noopener noreferrer">
                {cta}
              </a>
            </Button>
        </CardFooter>
    </Card>
);

const Section = ({ title, icon: Icon, children }: { title: string, icon: React.ElementType, children: React.ReactNode }) => (
    <div className="mb-16">
        <div className="flex items-center gap-4 mb-8">
            <Icon className="h-10 w-10 text-primary" />
            <h2 className="text-3xl font-headline tracking-tight">{title}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {children}
        </div>
    </div>
);


export default function SubscriptionsPage() {
    const { t } = useI18n();

    const plans = t('subscriptions.plans');

    return (
        <div className="flex flex-col min-h-screen bg-secondary/50">
            <Header />
            <main className="flex-grow pt-24 md:pt-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-7xl font-headline text-primary">{t('subscriptions.title')}</h1>
                        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">{t('subscriptions.subtitle')}</p>
                    </div>

                    <div className="mb-12 rounded-lg overflow-hidden shadow-2xl">
                       <div style={{position: 'relative', paddingBottom: '56.25%', height: 0}}><iframe id="js_video_iframe" src="https://jumpshare.com/embed/tJkhschbBrZQQXCdYvHY" frameBorder="0" allowFullScreen style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}></iframe></div>
                    </div>


                    <Section title={t('subscriptions.categories.kids')} icon={Star}>
                         <PlanCard 
                            title={plans.kids_annual.name}
                            price={plans.kids_annual.price}
                            description={plans.kids_annual.description}
                            info={plans.kids_info}
                            cta={t('subscriptions.cta_button')}
                            highlight
                        />
                         <PlanCard 
                            title={plans.kids_premium.name}
                            price={plans.kids_premium.price}
                            description={plans.kids_premium.description}
                            info={plans.kids_info_premium}
                            cta={t('subscriptions.cta_button')}
                        />
                         <PlanCard 
                            title={plans.adhesion.name}
                            price={plans.adhesion.price}
                            description={plans.adhesion.description}
                            info={plans.adhesion.info}
                            cta={t('subscriptions.cta_button')}
                        />
                    </Section>

                     <Section title={t('subscriptions.categories.students')} icon={GraduationCap}>
                        <PlanCard 
                            title={plans.student_annual.name}
                            price={plans.student_annual.price}
                            info={plans.student_info}
                            cta={t('subscriptions.cta_button')}
                        />
                    </Section>

                     <Section title={t('subscriptions.categories.adults_jjb')} icon={User}>
                         <PlanCard 
                            title={plans.adult_annual.name}
                            price={plans.adult_annual.price}
                            description={plans.adult_annual.description}
                             info={plans.adult_info}
                            cta={t('subscriptions.cta_button')}
                            highlight
                        />
                         <PlanCard 
                            title={plans.adult_6m.name}
                            price={plans.adult_6m.price}
                             info={plans.adult_info}
                            cta={t('subscriptions.cta_button')}
                        />
                        <PlanCard 
                            title={plans.adult_1m.name}
                            price={plans.adult_1m.price}
                             info={plans.adult_info}
                            cta={t('subscriptions.cta_button')}
                        />
                    </Section>
                    
                    <Section title={t('subscriptions.categories.mma_jjb')} icon={Briefcase}>
                         <PlanCard 
                            title={plans.mma_jjb_annual.name}
                            price={plans.mma_jjb_annual.price}
                            info={plans.mma_info}
                            cta={t('subscriptions.cta_button')}
                            highlight
                        />
                         <PlanCard 
                            title={plans.mma_jjb_6m.name}
                            price={plans.mma_jjb_6m.price}
                            info={plans.mma_info}
                            cta={t('subscriptions.cta_button')}
                        />
                        <PlanCard 
                            title={plans.mma_only_annual.name}
                            price={plans.mma_only_annual.price}
                            info={plans.mma_info}
                            cta={t('subscriptions.cta_button')}
                        />
                    </Section>

                    <Section title={t('subscriptions.categories.family_jjb')} icon={Users}>
                         <PlanCard 
                            title={plans.family_2.name}
                            price={plans.family_2.price}
                            info={plans.family_info}
                            cta={t('subscriptions.cta_button')}
                        />
                         <PlanCard 
                            title={plans.family_3.name}
                            price={plans.family_3.price}
                            info={plans.family_info}
                            cta={t('subscriptions.cta_button')}
                        />
                    </Section>

                     <Card className="mt-16 text-center p-6 bg-background">
                        <CardHeader>
                            <CardTitle>{t('subscriptions.help_title')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <p className="text-muted-foreground">{t('subscriptions.validity')}</p>
                             <p className="text-muted-foreground">{t('subscriptions.renewal')}</p>
                            <p className="text-muted-foreground">{t('subscriptions.payment_info')}</p>
                           
                        </CardContent>
                         <CardFooter className="flex justify-center">
                              <Button asChild>
                                <a href="https://wa.me/590691275351" target="_blank" rel="noopener noreferrer">{t('subscriptions.cta_contact')}</a>
                            </Button>
                         </CardFooter>
                    </Card>

                </div>
            </main>
            <Footer />
        </div>
    );
}
