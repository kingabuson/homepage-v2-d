import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChartIcon, SearchIcon, RocketIcon, BulbIcon } from './AnimatedIcons';
import FeatureMockup from './FeatureMockup';

const features = [
    {
        id: '01',
        title: 'Rich Data Sets',
        heading: 'If it exists, it\'s on Tracxn',
        subtext: 'Get unmatched coverage of Companies, Investors, Funding Rounds, and more. We track 6M+ entities across 3000+ sectors globally.',
        description: 'Comprehensive coverage across Companies, Investors, and Funding databases.',
        detail: 'From obscure startups in emerging markets to late-stage unicorns. We track everything so you don\'t miss anything.',
        color: '#202124', // Text color for light bg
        bg: '#f2f0e6', // Beige
        accent: '#FCA800',
        icon: <SearchIcon color="#202124" />,
        imageSrc: '/images/feature-1.png',
        videoSrc: 'https://cdn.tracxn.com/marketing-campaigns/Homepage_illustrations_iYYiQe2VRsrWsrBtEFYTi.mp4',
        mediaType: 'video',
        animationType: 'scroll'
    },
    {
        id: '02',
        title: 'Deep Dives',
        heading: 'Human-Verified Data You Can Trust',
        subtext: 'AI scans the web, but humans verify the facts. Get "Human-in-the-loop" quality you can trust for your investment decisions.',
        description: 'Don\'t rely on raw AI scrapes. Our data is verified by domain experts for accuracy.',
        detail: 'AI scans the web, but humans verify the facts. Get "Human-in-the-loop" quality you can trust for your investment decisions.',
        color: '#202124', // Text color for light bg
        bg: '#dff3ff', // Light Blue
        accent: '#FF0D00',
        icon: <ChartIcon color="#202124" />,
        imageSrc: '/images/feature-2.png',
        animationType: 'scroll'
    },
    {
        id: '03',
        title: 'Workflow Solutions',
        heading: 'Cap Tables, Financials, and Transaction Histories',
        subtext: 'Visualize ownership structures and export detailed financial performance data directly to your models.',
        description: 'Go deep with Cap Tables, Financials, and detailed transaction histories.',
        detail: 'Visualize ownership structures and financial performance. Export data directly to your models.',
        color: '#202124', // Dark text for light bg
        bg: '#F5DAD2', // Darker Pink (User Requested)
        accent: '#ffffff',
        icon: <RocketIcon color="#202124" />,
        imageSrc: '/images/feature-3.png',
        animationType: 'float'
    },
    {
        id: '04',
        title: 'Intelligence Tools',
        heading: 'Spot the Next Big Thing Before Competitors',
        subtext: 'Identify emerging trends and market shifts early with our "Soonicorn" lists and predictive scoring.',
        description: 'Spot the next big thing before your competitors with our "Soonicorn" lists.',
        detail: 'Identify emerging trends and market shifts early. Our predictive scoring helps you prioritize the right targets.',
        color: '#202124', // Dark text for light bg
        bg: '#ECFAE5', // Light Green (User Requested)
        accent: '#ffffff',
        icon: <BulbIcon color="#202124" />,
        imageSrc: '/images/feature-4.png',
        animationType: 'float'
    },
    {
        id: '05',
        title: 'Sectors and Reports',
        heading: 'Deep Dive into 3,000+ Sectors',
        subtext: 'Get curated, data-backed insights on sector activity and investor movements across 30+ geographies.',
        description: 'Access handcrafted reports spotlights key trends and market dynamics.',
        detail: 'Comprehensive overview of market dynamics and emerging business models across global markets.',
        color: '#202124',
        bg: '#F0F0FF', // Very Light Purple/Blue
        accent: '#ffffff',
        icon: <RocketIcon color="#202124" />,
        imageSrc: '/images/feature-5.png',
        animationType: 'float'
    }
];

const Features = () => {
    const [activeTab, setActiveTab] = useState('01');

    return (
        <section id="features" style={styles.section}>
            <div className="container" style={styles.container}>
                <h2 style={styles.heading}>Identify, analyze, and track the world's private markets</h2>

                <div style={styles.contentWrapper}>
                    <div style={styles.stickyCol}>
                        <div style={styles.tabsWrapper}>
                            <div style={styles.tabs}>
                                {features.map((feature) => (
                                    <motion.div
                                        key={feature.id}
                                        style={{
                                            ...styles.tab,
                                            color: activeTab === feature.id ? 'var(--color-text-main)' : 'var(--color-text-light)',
                                            fontWeight: activeTab === feature.id ? 600 : 400,
                                            borderLeft: activeTab === feature.id ? '2px solid var(--color-text-main)' : '2px solid transparent',
                                        }}
                                        onClick={() => {
                                            document.getElementById(`feature-${feature.id}`).scrollIntoView({ behavior: 'smooth', block: 'center' });
                                        }}
                                        whileHover={{ x: 4 }}
                                    >
                                        <span style={styles.tabTitle}>{feature.id} {feature.title}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div style={styles.contentCol}>
                        {features.map((feature) => (
                            <FeatureSection
                                key={feature.id}
                                feature={feature}
                                setActiveTab={setActiveTab}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeatureSection = ({ feature, setActiveTab }) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: false
    });

    useEffect(() => {
        if (inView) {
            setActiveTab(feature.id);
        }
    }, [inView, feature.id, setActiveTab]);

    return (
        <div id={`feature-${feature.id}`} ref={ref} style={styles.featureBlock}>
            <motion.div
                style={{
                    ...styles.card,
                    backgroundColor: feature.bg,
                    color: feature.color
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div style={styles.cardContent}>
                    <h3 style={{ ...styles.cardTitle, color: feature.color }}>{feature.heading}</h3>
                    <p style={{ ...styles.cardDesc, color: feature.color, opacity: 0.9 }}>{feature.subtext}</p>
                    {/* Removed redundant detail/description as per user request */}

                    <div style={styles.buttonWrapper}>
                        <button style={{
                            ...styles.learnMoreBtn,
                            color: feature.bg,
                            backgroundColor: feature.color
                        }}>
                            Learn more
                        </button>
                    </div>
                </div>

                <div style={styles.mockupWrapper}>
                    <div style={styles.mockupContainer}>
                        <FeatureMockup
                            imageSrc={feature.imageSrc}
                            videoSrc={feature.videoSrc}
                            mediaType={feature.mediaType}
                            inView={inView}
                            type={feature.animationType}
                            altText={feature.title}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const styles = {
    section: {
        padding: '80px 0',
        backgroundColor: 'var(--color-background)',
    },
    container: {
        position: 'relative',
    },
    contentWrapper: {
        display: 'flex',
        gap: '60px',
        alignItems: 'flex-start',
    },
    stickyCol: {
        width: '25%', // Reduced width for sidebar
        position: 'sticky',
        top: '120px',
        height: 'fit-content',
    },
    contentCol: {
        width: '75%', // Increased width for content
        display: 'flex',
        flexDirection: 'column',
        gap: '80px', // Increased gap between cards
        paddingBottom: '100px',
    },
    heading: {
        fontSize: '3.5rem',
        marginBottom: '80px',
        lineHeight: 1.2,
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 80px',
    },
    tabs: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    tab: {
        padding: '8px 16px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        transition: 'all 0.2s ease',
        fontSize: '1.1rem',
    },
    tabTitle: {
        fontSize: '1.1rem',
    },
    featureBlock: {
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
    },
    card: {
        borderRadius: '32px', // Large border radius
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column', // Stack on mobile, but we'll use grid/flex for desktop
        padding: '48px',
        position: 'relative',
        minHeight: '600px',
    },
    cardContent: {
        maxWidth: '600px',
        marginBottom: '40px',
        zIndex: 2,
    },
    cardTitle: {
        fontSize: '2rem', // Reduced from 2.5rem
        marginBottom: '24px',
        fontWeight: 400, // Reduced from 500
    },
    cardDesc: {
        fontSize: '1.25rem',
        marginBottom: '16px',
        lineHeight: 1.5,
    },
    cardDetail: {
        fontSize: '1rem',
        marginBottom: '32px',
        lineHeight: 1.6,
    },
    buttonWrapper: {
        marginTop: '24px',
    },
    learnMoreBtn: {
        padding: '12px 24px',
        borderRadius: '8px',
        border: 'none',
        fontWeight: 600,
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'transform 0.2s ease',
    },
    mockupWrapper: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        marginTop: '20px',
    },
    mockupContainer: {
        width: '100%',
        height: '400px',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    }
};

export default Features;
