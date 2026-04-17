import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    TrendingUp,
    Briefcase,
    Building2,
    Handshake,
    Landmark,
    Newspaper,
    Rocket,
    GraduationCap
} from 'lucide-react';

const segments = [
    {
        id: 'vc',
        title: 'Venture Capital Funds',
        link: 'https://w.tracxn.com/customers/solutions-for-venture-capital-funds',
        description: 'Discover emerging startups, track competitor portfolios, and source high-potential deals faster.',
        Icon: TrendingUp,
        tint: '#E8F0FE'
    },
    {
        id: 'pe',
        title: 'Private Equity Funds',
        link: 'https://w.tracxn.com/customers/solutions-for-private-equity-funds',
        description: 'Identify buyout opportunities, analyze market landscapes, and access deep company financials.',
        Icon: Briefcase,
        tint: '#F0F3FF'
    },
    {
        id: 'ib',
        title: 'Investment Banks',
        link: 'https://w.tracxn.com/customers/solutions-for-investment-banks',
        description: 'Support capital raising and advisory services with comprehensive private market intelligence and comps.',
        Icon: Landmark,
        tint: '#FFF5E6'
    },
    {
        id: 'corpdev',
        title: 'Corporate Development & M&A',
        link: 'https://w.tracxn.com/customers/solutions-for-corporate-dev-and-ma-team',
        description: 'Streamline target searches, evaluate synergies, and monitor market consolidation.',
        Icon: Handshake,
        tint: '#E8F8F0'
    },
    {
        id: 'innovation',
        title: 'Corporate Innovation',
        link: 'https://w.tracxn.com/customers/solutions-for-corporate-innovation',
        description: 'Monitor technology trends, scout innovative partnerships, and stay ahead of industry disruptions.',
        Icon: Building2,
        tint: '#F0F3FF'
    },
    {
        id: 'incubators',
        title: 'Incubators & Accelerators',
        link: 'https://w.tracxn.com/customers/solutions-for-incubators',
        description: 'Benchmark portfolio performance, connect with follow-on investors, and analyze successful models.',
        Icon: Rocket,
        tint: '#FFEDEB'
    },
    {
        id: 'journalists',
        title: 'Journalists & Publications',
        link: 'https://w.tracxn.com/customers/solutions-for-journalists-publications',
        description: 'Access reliable data on funding, valuations, and executives to build compelling narratives.',
        Icon: Newspaper,
        tint: '#F5F5F5'
    },
    {
        id: 'universities',
        title: 'Universities & Research',
        link: 'https://w.tracxn.com/customers/solutions-for-universities',
        description: 'Support academic research, track innovation trends, and analyze emerging tech sectors.',
        Icon: GraduationCap,
        tint: '#EEF2FF'
    }
];

const CustomerSegments = () => {
    return (
        <section style={styles.section}>
            <div className="container" style={styles.container}>
                <div style={styles.header}>
                    <span style={styles.eyebrow}>For every deal team</span>
                    <h2 style={styles.heading}>
                        Built for the entire <br />
                        <span className="text-gradient-testimonial">Private Market Ecosystem</span>
                    </h2>
                    <p style={styles.subheading}>
                        From early-stage venture scouts to global M&A advisors, Tracxn powers the workflows of
                        every team that operates in private markets.
                    </p>
                </div>

                <div style={styles.grid}>
                    {segments.map((item, idx) => {
                        const Icon = item.Icon;
                        return (
                            <motion.a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                style={styles.card}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: idx * 0.04 }}
                                viewport={{ once: true, amount: 0.2 }}
                                whileHover={{ y: -4, borderColor: '#1a73e8' }}
                            >
                                <div style={{ ...styles.iconWrap, backgroundColor: item.tint }}>
                                    <Icon size={22} color="#0b3d91" strokeWidth={1.8} />
                                </div>
                                <h3 style={styles.cardTitle}>{item.title}</h3>
                                <p style={styles.cardDesc}>{item.description}</p>
                                <div style={styles.exploreRow}>
                                    <span style={styles.exploreText}>Explore</span>
                                    <ArrowUpRight size={16} />
                                </div>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '120px 0',
        backgroundColor: '#FCFCFC',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
    },
    header: {
        textAlign: 'center',
        marginBottom: '60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    eyebrow: {
        display: 'inline-block',
        padding: '6px 14px',
        borderRadius: '999px',
        backgroundColor: 'rgba(26,115,232,0.08)',
        color: '#0b3d91',
        fontFamily: 'var(--font-family-sans)',
        fontSize: '0.82rem',
        fontWeight: 600,
        letterSpacing: '0.02em',
        marginBottom: '20px',
        border: '1px solid rgba(26,115,232,0.14)',
    },
    heading: {
        fontSize: '3.5rem',
        fontFamily: '"PT Serif", serif',
        fontWeight: 400,
        color: '#1a1a1a',
        maxWidth: '900px',
        margin: '0 auto 16px',
        lineHeight: 1.15,
    },
    subheading: {
        fontSize: '1.1rem',
        color: '#5f6368',
        fontFamily: 'var(--font-family-sans)',
        lineHeight: 1.6,
        maxWidth: '680px',
        margin: '0 auto',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        padding: '28px 24px 24px',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid #e5e7eb',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'all 0.2s ease',
        boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
        minHeight: '220px',
        position: 'relative',
    },
    iconWrap: {
        width: '44px',
        height: '44px',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
    },
    cardTitle: {
        fontSize: '1.05rem',
        fontFamily: 'var(--font-family-sans)',
        fontWeight: 600,
        color: '#111827',
        margin: '0 0 10px 0',
        lineHeight: 1.3,
    },
    cardDesc: {
        fontSize: '0.92rem',
        color: '#5f6368',
        lineHeight: 1.55,
        fontFamily: 'var(--font-family-sans)',
        margin: 0,
        flex: 1,
    },
    exploreRow: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        marginTop: '16px',
        color: '#0b3d91',
        fontFamily: 'var(--font-family-sans)',
        fontSize: '0.88rem',
        fontWeight: 600,
    },
    exploreText: {
        color: '#0b3d91',
    }
};

export default CustomerSegments;
