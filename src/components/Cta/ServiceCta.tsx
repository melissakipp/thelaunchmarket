import Link from "next/link";
import styles from "./ServiceCta.module.css";
import CustomBtnLink from "../UI/Links/CustomBtnLink";

export default function ServiceCta() {
  return (
    <section className={styles.cta}>
          <div>
            <h2>Ready to Transform Your Digital Presence?</h2>
            <p>Let's work together to create something amazing.</p>
            <CustomBtnLink href="/contact" variant="cta">
              Get Started by Contacting Us
            </CustomBtnLink>
          </div>
        </section>
  );
}
