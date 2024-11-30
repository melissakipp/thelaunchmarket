import Link from "next/link";
import styles from "./ServiceCta.module.css";

export default function ServiceCta() {
  return (
    <section className={styles.cta}>
          <div>
            <h2>Ready to Transform Your Digital Presence?</h2>
            <p>Let's work together to create something amazing.</p>
            <Link href="/contact" className={styles.primaryBtn}>
              Get Started by Contacting Us
            </Link>
          </div>
        </section>
  );
}
