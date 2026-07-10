// ShieldLine Welcome — unique "Elevation Profile Board" (not materials photo mosaic).
// CSS-built siding courses / profiles; zero stock-image tiles.
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

type ProfileKind =
  | 'lap'
  | 'board-batten'
  | 'shake'
  | 'vertical'
  | 'soffit'
  | 'trim';

type Profile = {
  name: string;
  detail: string;
  kind: ProfileKind;
  tone: string;
  shadow: string;
  highlight: string;
  sku: string;
};

const PROFILES: Profile[] = [
  {
    name: 'Fiber-Cement Lap',
    detail: '6.25″ exposure · paint-grade',
    kind: 'lap',
    tone: '#8b9aab',
    shadow: '#5c6b7a',
    highlight: '#c5d0dc',
    sku: 'SL-LP-01',
  },
  {
    name: 'Board & Batten',
    detail: '12″ board · 2.5″ batten',
    kind: 'board-batten',
    tone: '#6d7a6a',
    shadow: '#3f4a3c',
    highlight: '#9aab94',
    sku: 'SL-BB-04',
  },
  {
    name: 'Straight Shake',
    detail: '7″ reveal · textured',
    kind: 'shake',
    tone: '#7a6a58',
    shadow: '#4a3f34',
    highlight: '#b09a82',
    sku: 'SL-SK-07',
  },
  {
    name: 'Vertical Panel',
    detail: 'Ship-lap tongue & groove',
    kind: 'vertical',
    tone: '#5a6d7c',
    shadow: '#33404a',
    highlight: '#8aa0b2',
    sku: 'SL-VP-02',
  },
  {
    name: 'Vented Soffit',
    detail: 'Hidden intake · continuous',
    kind: 'soffit',
    tone: '#b8c0c8',
    shadow: '#7a848e',
    highlight: '#e4e9ee',
    sku: 'SL-SF-11',
  },
  {
    name: 'Trim Package',
    detail: 'Windows · corners · fascia',
    kind: 'trim',
    tone: '#e8ebe8',
    shadow: '#a8b0a8',
    highlight: '#ffffff',
    sku: 'SL-TR-09',
  },
];

function ProfileSwatch({ p }: { p: Profile }) {
  return (
    <div
      className={styles.profileSwatch}
      data-kind={p.kind}
      style={
        {
          '--p-tone': p.tone,
          '--p-shadow': p.shadow,
          '--p-hi': p.highlight,
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      {p.kind === 'lap' && (
        <div className={styles.kindLap}>
          <span /><span /><span /><span />
        </div>
      )}
      {p.kind === 'board-batten' && (
        <div className={styles.kindBB}>
          <i /><i /><i />
          <b /><b /><b />
        </div>
      )}
      {p.kind === 'shake' && (
        <div className={styles.kindShake}>
          <span /><span /><span /><span /><span /><span />
        </div>
      )}
      {p.kind === 'vertical' && (
        <div className={styles.kindVert}>
          <span /><span /><span /><span />
        </div>
      )}
      {p.kind === 'soffit' && (
        <div className={styles.kindSoffit}>
          <span /><span /><span /><span /><span />
        </div>
      )}
      {p.kind === 'trim' && (
        <div className={styles.kindTrim}>
          <span className={styles.trimFrame} />
          <span className={styles.trimBar} />
        </div>
      )}
    </div>
  );
}

function ElevationProfileBoard() {
  return (
    <div className={styles.elevBoard} aria-label="ShieldLine siding profile board">
      <div className={styles.elevCap} aria-hidden="true">
        <span className={styles.elevBolt} />
        <span className={styles.elevBrand}>SHIELDLINE · FIELD SAMPLES</span>
        <span className={styles.elevBolt} />
      </div>

      <header className={styles.elevHead}>
        <div>
          <p className={styles.elevEyebrow}>Wall elevation kit</p>
          <h2 className={styles.elevTitle}>Profile Board</h2>
        </div>
        <span className={styles.elevCount}>{PROFILES.length} courses</span>
      </header>

      {/* Mini façade mock — staggered courses */}
      <div className={styles.facadePreview} aria-hidden="true">
        <div className={styles.facadeGable} />
        <div className={styles.facadeWall}>
          {PROFILES.slice(0, 4).map((p, i) => (
            <div
              key={p.sku}
              className={styles.facadeCourse}
              style={{
                background: `linear-gradient(180deg, ${p.highlight}, ${p.tone} 45%, ${p.shadow})`,
                marginLeft: i % 2 === 0 ? 0 : 10,
              }}
            />
          ))}
          <div className={styles.facadeWindow} />
        </div>
      </div>

      <ul className={styles.profileList} role="list">
        {PROFILES.map((p, i) => (
          <motion.li
            key={p.sku}
            className={styles.profileRow}
            role="listitem"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.3 + i * 0.055,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <ProfileSwatch p={p} />
            <div className={styles.profileCopy}>
              <div className={styles.profileNameRow}>
                <span className={styles.profileName}>{p.name}</span>
                <span className={styles.profileSku}>{p.sku}</span>
              </div>
              <span className={styles.profileDetail}>{p.detail}</span>
            </div>
            <span
              className={styles.profileChip}
              style={{ background: p.tone, borderColor: p.shadow }}
              aria-hidden="true"
            />
          </motion.li>
        ))}
      </ul>

      <footer className={styles.elevFoot} aria-hidden="true">
        <span>Factory-certified crews</span>
        <span className={styles.elevRule} />
        <span>10-yr install warranty</span>
      </footer>
    </div>
  );
}

export default function WelcomePage() {
  const badgeText = "Waco's Most Trusted Siding Company — Since 2011";
  const headlineLines = ['Stronger Walls.', 'Cleaner Lines.'];
  const headlineAccent = 'ShieldLine.';
  const subheadline =
    'Flat-rate pricing. Free on-site estimates. Lifetime Product Support + 10-Year Installation Warranty. Serving Waco and Central Texas with factory-certified installers.';
  const primaryCta = { label: 'Call (254) 890-9090', href: 'tel:+12548909090' };
  const secondaryCta = { label: 'Free Estimate', href: '/contact' };
  const chips = [
    'Free Estimates',
    'No Contracts',
    'Factory-Certified',
    '15+ Yrs Local',
    '10-Yr Install Warranty',
  ];

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.shard} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
        >
          <ElevationProfileBoard />
        </motion.div>
      </div>
    </section>
  );
}
