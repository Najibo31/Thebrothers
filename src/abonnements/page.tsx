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
              <a href="https://wa.me/590691275351" target="_blank" rel="noopener noreferrer">
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

    return (
        <div className="flex flex-col min-h-screen bg-secondary/50">
            <Header />
            <main className="flex-grow pt-24 md:pt-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-7xl font-headline text-primary">{t('subscriptions.title')}</h1>
                        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">{t('subscriptions.subtitle')}</p>
                    </div>

                    <Section title={t('subscriptions.categories.kids')} icon={Star}>
                         <PlanCard 
                            title={t('subscriptions.plans.kids_annual.name')}
                            price={t('subscriptions.plans.kids_annual.price')}
                            description={t('subscriptions.plans.kids_annual.description')}
                            info={t('subscriptions.plans.kids_info')}
                            cta={t('subscriptions.cta_button')}
                            highlight
                        />
                         <PlanCard 
                            title={t('subscriptions.plans.kids_premium.name')}
                            price={t('subscriptions.plans.kids_premium.price')}
                            description={t('subscriptions.plans.kids_premium.description')}
                            info={t('subscriptions.plans.kids_info')}
                            cta={t('subscriptions.cta_button')}
                        />
                    </Section>

                     <Section title={t('subscriptions.categories.students')} icon={GraduationCap}>
                        <PlanCard 
                            title={t('subscriptions.plans.student_annual.name')}
                            price={t('subscriptions.plans.student_annual.price')}
                            info={t('subscriptions.plans.student_info')}
                            cta={t('subscriptions.cta_button')}
                        />
                    </Section>

                     <Section title={t('subscriptions.categories.adults_jjb')} icon={User}>
                         <PlanCard 
                            title={t('subscriptions.plans.adult_annual.name')}
                            price={t('subscriptions.plans.adult_annual.price')}
                            description={t('subscriptions.plans.adult_annual.description')}
                             info={t('subscriptions.plans.adult_info')}
                            cta={t('subscriptions.cta_button')}
                            highlight
                        />
                         <PlanCard 
                            title={t('subscriptions.plans.adult_6m.name')}
                            price={t('subscriptions.plans.adult_6m.price')}
                             info={t('subscriptions.plans.adult_info')}
                            cta={t('subscriptions.cta_button')}
                        />
                        <PlanCard 
                            title={t('subscriptions.plans.adult_1m.name')}
                            price={t('subscriptions.plans.adult_1m.price')}
                             info={t('subscriptions.plans.adult_info')}
                            cta={t('subscriptions.cta_button')}
                        />
                    </Section>
                    
                    <Section title={t('subscriptions.categories.mma_jjb')} icon={Briefcase}>
                         <PlanCard 
                            title={t('subscriptions.plans.mma_jjb_annual.name')}
                            price={t('subscriptions.plans.mma_jjb_annual.price')}
                             info={t('subscriptions.plans.mma_info')}
                            cta={t('subscriptions.cta_button')}
                            highlight
                        />
                         <PlanCard 
                            title={t('subscriptions.plans.mma_jjb_6m.name')}
                            price={t('subscriptions.plans.mma_jjb_6m.price')}
                             info={t('subscriptions.plans.mma_info')}
                            cta={t('subscriptions.cta_button')}
                        />
                        <PlanCard 
                            title={t('subscriptions.plans.mma_only_annual.name')}
                            price={t('subscriptions.plans.mma_only_annual.price')}
                             info={t('subscriptions.plans.mma_info')}
                            cta={t('subscriptions.cta_button')}
                        />
                    </Section>

                    <Section title={t('subscriptions.categories.family_jjb')} icon={Users}>
                         <PlanCard 
                            title={t('subscriptions.plans.family_2.name')}
                            price={t('subscriptions.plans.family_2.price')}
                             info={t('subscriptions.plans.family_info')}
                            cta={t('subscriptions.cta_button')}
                        />
                         <PlanCard 
                            title={t('subscriptions.plans.family_3.name')}
                            price={t('subscriptions.plans.family_3.price')}
                             info={t('subscriptions.plans.family_info')}
                            cta={t('subscriptions.cta_button')}
                        />
                    </Section>

                     <Card className="mt-16 text-center p-6 bg-background">
                        <CardHeader>
                            <CardTitle>{t('subscriptions.help')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <p className="text-muted-foreground">{t('subscriptions.validity')}</p>
                            <p className="text-muted-foreground">{t('subscriptions.secure_payment')}</p>
                           
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
