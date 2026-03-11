import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroBg from '../assets/hero-bg-final-v2.png';

import fujitsuLogo from '../assets/fujitsu.png';
import tenityLogo from '../assets/tenity.png';
import accelTextLogo from '../assets/accel-text.png';

const logos = [
    { name: 'Tenity', url: tenityLogo },
    { name: 'Partech', url: 'https://cdn.tracxn.com/images/static/homepage/clients/partech-wbg_90x90_1x.png' },
    { name: 'IQT', url: 'https://cdn.tracxn.com/images/static/homepage/clients/iqt_90x90_1x.png' },
    { name: 'Fujitsu', url: fujitsuLogo },
    { name: 'Accel', url: accelTextLogo }
];

const HeroV3 = () => {
    const { scrollY } = useScroll();
    const highlightGradient = useTransform(
        scrollY,
        [0, 300],
        [
            'linear-gradient(90deg, #003366 0%, #003366 20%, #003366 30%, #66CCFF 40%, #003366 50%, #66CCFF 60%, #003366 70%, #003366 80%, #003366 100%)',
            'linear-gradient(90deg, #003366 0%, #003366 20%, #003366 30%, #66CCFF 40%, #003366 50%, #66CCFF 60%, #003366 70%, #003366 80%, #003366 100%)'
        ]
    );

    return (
        <section style={styles.section}>
            {/* Background Image Layer */}
            <div style={styles.bgLayer}>
                <img
                    src={heroBg}
                    alt="Hero Background"
                    style={styles.bgImage}
                />
            </div>
            <div className="container" style={styles.container}>
                <div style={styles.topSection}>
                    <div style={styles.headerContent}>
                        <h1 style={styles.headline}>
                            Everything You Need on <br />
                            <motion.span
                                style={{ ...styles.highlight, backgroundImage: highlightGradient }}
                            >
                                Private Market Data
                            </motion.span>
                        </h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={styles.subhead}
                        >
                            Scale your sourcing with AI-driven insights and expert-vetted data, <br />
                            unified in a single platform for investors, banks, and policy-makers.
                        </motion.p>
                    </div>

                    {/* Logos Section - Moved up */}
                    <div style={styles.logosSection}>
                        <div style={styles.logoStrip}>
                            {logos.map((logo, index) => (
                                <motion.div
                                    key={index}
                                    style={styles.logoItem}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                                >
                                    <img
                                        src={logo.url}
                                        alt={logo.name}
                                        style={styles.logoImg}
                                        title={logo.name}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div style={styles.ctaGroup}>
                        <button className="btn-donate">Request for demo</button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 60, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        style={styles.videoContainer}
                    >
                        <div style={styles.videoWrapper}>
                            <video
                                src="https://cdn.tracxn.com/marketing-campaigns/AI_Search_Video_for_homepage_wireframe_qWXUFy_7YCbu6GFAeCCwL.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={styles.videoStyle}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '120px 0 60px',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    bgLayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
    },
    bgImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'bottom',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 24px 60px', // Reduced top padding from 120px to 60px
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    topSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
    },
    headerContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    videoContainer: {
        width: '100%',
        margin: '0 auto',
        maxWidth: '1000px',
    },
    headline: {
        fontSize: '5rem', // Increased from 3.5rem
        fontFamily: '"PT Serif", serif',
        fontWeight: 400,
        color: '#1a1a1a',
        marginBottom: '20px',
        letterSpacing: '-0.02em',
        lineHeight: 1.1, // Tighter line height for larger text
        position: 'relative',
        zIndex: 2,
    },
    highlight: {
        backgroundSize: '200% auto',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block',
    },
    subhead: {
        fontSize: '1.25rem',
        color: '#5f6368',
        marginBottom: '24px',
        fontFamily: 'var(--font-family-sans)',
        lineHeight: 1.6,
        maxWidth: '1000px',
        margin: '0 0 30px 0',
        position: 'relative',
        zIndex: 2,
    },
    logosSection: {
        textAlign: 'center',
        marginTop: 'auto',
    },
    trustedBy: {
        fontSize: '1rem',
        color: '#5f6368',
        marginBottom: '20px',
        fontFamily: 'var(--font-family-sans)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },
    logoStrip: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '40px',
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: 2,
    },
    logoItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImg: {
        height: '100px',
        width: 'auto',
        transition: 'all 0.3s ease',
    },
    ctaGroup: {
        marginTop: '10px',
        marginBottom: '40px',
    },
    videoWrapper: {
        width: '100%',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px -10px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0,0,0,0.05)',
        backgroundColor: '#000',
    },
    videoStyle: {
        width: '100%',
        height: 'auto',
        display: 'block',
    }
};

export default HeroV3;
