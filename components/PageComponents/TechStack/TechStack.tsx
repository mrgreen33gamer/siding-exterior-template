'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface BrandItem {
  name:     string;
  type:     string;
  icon?:    string;
}

interface BrandGroup {
  label: string;
  items: BrandItem[];
}

interface TechStackProps {
  title?:    string;
  subtitle?: string;
  groups?:   BrandGroup[];
}

const DEFAULT_GROUPS: BrandGroup[] = [
  {
    label: 'Materials We Install',
    items: [
      { name: 'Fiber Cement Lap', type: 'brand', icon: '✓' },
      { name: 'Board & Batten',   type: 'brand', icon: '✓' },
      { name: 'Vinyl Systems',    type: 'brand', icon: '✓' },
      { name: 'Insulated Vinyl',  type: 'brand', icon: '✓' },
      { name: 'PVC Trim',         type: 'brand', icon: '✓' },
      { name: 'Aluminum Fascia',  type: 'brand', icon: '✓' },
      { name: 'Ventilated Soffit', type: 'brand', icon: '✓' },
      { name: 'WRB / Housewrap',  type: 'brand', icon: '✓' },
    ],
  },
  {
    label: 'Credentials & Coverage',
    items: [
      { name: 'Factory-Certified', type: 'cert', icon: '✓' },
      { name: 'Bonded & Insured',  type: 'cert', icon: '✓' },
      { name: '10-Year Install Warranty', type: 'cert', icon: '✓' },
      { name: 'Lifetime Product Support', type: 'cert', icon: '✓' },
    ],
  },
  {
    label: 'Project Types',
    items: [
      { name: 'Full-Home Reclads', type: 'tool', icon: '✓' },
      { name: 'Partial Elevations', type: 'tool', icon: '✓' },
      { name: 'Storm Repairs', type: 'tool', icon: '✓' },
      { name: 'Soffit & Fascia', type: 'tool', icon: '✓' },
      { name: 'Exterior Trim', type: 'tool', icon: '✓' },
      { name: 'Builder Packages', type: 'tool', icon: '✓' },
    ],
  },
];

const TechStack: React.FC<TechStackProps> = ({
  title    = 'Materials, Credentials & Project Types',
  subtitle = 'From fiber cement to vinyl and full-home reclads — built for Central Texas properties.',
  groups   = DEFAULT_GROUPS,
}) => {
  return (
    <section className={styles.section} aria-label="Materials and credentials">
      <div className={styles.container}>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>What We Work With</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </motion.div>

        <div className={styles.groups}>
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              className={styles.group}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08, duration: 0.45 }}
            >
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <div className={styles.itemGrid}>
                {group.items.map((item) => (
                  <div key={item.name} className={styles.item}>
                    <span className={styles.itemIcon} aria-hidden="true">{item.icon}</span>
                    <span className={styles.itemName}>{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
