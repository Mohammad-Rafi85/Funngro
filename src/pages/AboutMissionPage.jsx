import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import MissionVision from '../components/MissionVision';
import WhyFunngro from '../components/WhyFunngro';
import ImpactSection from '../components/ImpactSection';
import AboutFinalCTA from '../components/AboutFinalCTA';

const AboutMissionPage = () => {
    return (
        <>
            <Helmet>
                <title>Our Mission | Empowering the Next Generation of Professionals | Funngro</title>
                <meta name="description" content="Funngro is built by educators, parents, and technology experts who believe teenagers should learn by doing real work. Discover our mission and vision." />
                <meta name="keywords" content="teen freelancing platform India, youth digital talent marketplace, student project outsourcing India, hire young talent India, startup talent solutions India" />
            </Helmet>

            <Navbar />
            <AboutHero />
            <MissionVision />
            <WhyFunngro />
            <ImpactSection />
            <AboutFinalCTA />

            <Footer />
        </>
    );
};

export default AboutMissionPage;
