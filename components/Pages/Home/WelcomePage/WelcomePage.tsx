// _archetype-library/hero-d-materials-grid/Component.tsx
//
// Hero D: Materials Grid — left copy, right mosaic of material swatches.
// Color tiles from materials[].swatch + name; optional imageSrc; staggered reveal.
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

function MaterialsMosaic({
  materials,
}: {
  materials: Array<{ name: string; swatch: string; imageSrc?: string }>;
}) {
  // Horizontal siding board stack — planks stacked like a wall profile
  return (
    <div className={styles.boardStack} role="list" aria-label="Siding profiles">
      <div className={styles.boardStackHeader} aria-hidden="true">
        <span className={styles.boardStackTitle}>Profile Wall</span>
        <span className={styles.boardStackMeta}>{materials.length} profiles</span>
      </div>
      {materials.map((m, i) => (
        <motion.div
          key={`${m.name}-${i}`}
          className={styles.boardFace}
          role="listitem"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.45,
            delay: 0.3 + i * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ ['--board-swatch' as string]: m.swatch }}
        >
          <div className={styles.boardProfile} style={{ backgroundColor: m.swatch }}>
            {m.imageSrc ? (
              <img
                src={m.imageSrc}
                alt=""
                className={styles.boardImage}
                draggable={false}
              />
            ) : null}
            <div className={styles.profileLines} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className={styles.boardLabel}>
            <span className={styles.boardName}>{m.name}</span>
            <span className={styles.boardSku}>SL-{String(i + 1).padStart(2, '0')}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function WelcomePage() {
const badgeText = 'Waco\'s Most Trusted Siding Company — Since 2011';
const headlineLines = [
  'Stronger Walls.',
  'Cleaner Lines.',
];
const headlineAccent = 'ShieldLine.';
const subheadline = 'Flat-rate pricing. Free on-site estimates. Lifetime Product Support + 10-Year Installation Warranty. Serving Waco and Central Texas with factory-certified installers.';
const primaryCta = { label: 'Call (254) 890-9090', href: 'tel:+12548909090' };
const secondaryCta = { label: 'Free Estimate', href: '/contact' };
const chips = [
  'Free Estimates',
  'No Contracts',
  'Factory-Certified',
  '15+ Yrs Local',
  '10-Yr Install Warranty',
];
const stats = [
  {
    "value": "2,800+",
    "label": "Homes Reclad"
  },
  {
    "value": "4.9 ★",
    "label": "Google Rating"
  },
  {
    "value": "10-Year",
    "label": "Install Warranty"
  },
  {
    "value": "Since 2011",
    "label": "Waco Owned"
  }
];
const meterTarget = 72;
const meterTopLabel = "Featured";
const meterMidLabel = "Popular";
const meterBotLabel = "Classic";
const particleColor = '#0ea5e9';
const beforeImageSrc = '/pages/home/welcome/before.jpg';
const afterImageSrc = '/pages/home/welcome/after.jpg';
const beforeLabel = "Faded siding";
const afterLabel = "Fresh exterior";
const mapCenterLabel = 'Service HQ';
const mapPins = [
  { label: 'Waco', x: 42, y: 48 },
  { label: 'Temple', x: 68, y: 62 },
  { label: 'Killeen', x: 58, y: 72 },
];
const coverageLabel = 'Central Texas coverage';
const materials = [
  { name: "James Hardie*", swatch: "#64748b", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Vinyl", swatch: "#94a3b8", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Board & Batten", swatch: "#475569", imageSrc: "/pages/home/welcome/mat-3.jpg" },
  { name: "Soffit", swatch: "#cbd5e1", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Trim", swatch: "#334155", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Paint-Ready", swatch: "#1e293b", imageSrc: "/pages/home/welcome/mat-3.jpg" }
];
const quote = "House looks ten years younger. Flashings were done right — no shortcuts at the windows.";
const authorName = "Megan & Cole";
const authorMeta = "Siding replace · Lorena";
const rating = 5;
const schematicLabel = "ShieldLine schematic";
const gauges = [
  { label: "Homes", value: "980+" },
  { label: "Rating", value: "4.8 ★" },
  { label: "Flashings", value: "Detailed" },
  { label: "Warranty", value: "Labor + mfr" }
];
const toggles = [
  { label: "Showroom open", on: true },
  { label: "Samples ready", on: true },
  { label: "Install crews", on: true }
];
const textureSrc = '/pages/home/welcome/hero-main.jpg';
const textureAlt = 'Texture';
const accentWord = "ShieldLine";

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
              <React.Fragment key={i}>{line}<br /></React.Fragment>
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
          <MaterialsMosaic materials={materials} />
        </motion.div>
      </div>
    </section>
  );
}
