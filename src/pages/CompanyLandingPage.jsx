import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import AboutLanding from '../components/AboutLanding';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CompanyLandingPage = () => {
    return (
        <>
            <Helmet>
                <title>Hire Smart Teen Talent for Real Business Impact | Funngro</title>
                <meta name="description" content="India’s fastest-growing teen freelancing platform connecting companies with innovative young minds. Hire student freelancers, outsource projects to youth talent." />
                <meta name="keywords" content="teen freelancing platform India, hire student freelancers, teen workforce India, youth digital talent marketplace, student project outsourcing India, hire young talent India, startup talent solutions India" />
            </Helmet>

            <Navbar />
            <Hero />
            <AboutLanding />
            <Services />
            <HowItWorks />
            <Testimonials />
            <CTABanner />

            {/* FAQ Section for SEO */}
            <section className="bg-slate-50 py-24 px-6 overflow-hidden">
                <div className="section-padding flex flex-col items-center">
                    <div className="text-center max-w-3xl mb-16">
                        <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Frequently Asked Questions</h2>
                        <p className="text-xl text-slate-600">Got questions? We've got answers.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
                        <div className="glass p-8 rounded-3xl">
                            <h4 className="text-lg font-bold text-slate-900 mb-4">How does Funngro work for companies?</h4>
                            <p className="text-slate-600">Companies register, post projects, and get curated talent profiles from India's best teenlancers. You select the best match, collaborate, and only pay after project delivery.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl">
                            <h4 className="text-lg font-bold text-slate-900 mb-4">Is it legal to hire teenagers for projects?</h4>
                            <p className="text-slate-600">Yes, Funngro operates within the legal framework where teenagers (above 14) can work on non-hazardous project tasks as a form of experiential learning and skill-building.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl">
                            <h4 className="text-lg font-bold text-slate-900 mb-4">What kind of projects can I post?</h4>
                            <p className="text-slate-600">Everything from Social Media Management, Video Creation, Web Design, and App Dev to Research & Data Entry. If it's digital and creative, our teens can do it.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl">
                            <h4 className="text-lg font-bold text-slate-900 mb-4">How do I ensure quality of work?</h4>
                            <p className="text-slate-600">Every teen freelancer on Funngro is vetted. We provide a managed platform and quality checks to ensure project deliverables meet your business standards.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default CompanyLandingPage;
