import styles from '../../../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h3>The Launch Market &copy; 2023</h3>
      <p>&#128386; <a href="mailto:info@thelaunchmarket.com ">Contact Us</a></p>
      <small>Created with &#10084; <a href="https://melissajkipp.com">Melissa Kipp</a></small>
    </footer>
  );
}
