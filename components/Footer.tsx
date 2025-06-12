import styles from '../styles/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <Link href="/privacy-policy" className={styles.link}>Política de Privacidad</Link>
        <span className={styles.separator}>|</span>
        <Link href="/terms" className={styles.link}>Condiciones del Servicio</Link>
        <span className={styles.separator}>|</span>
        <Link href="/data-removal" className={styles.link}>Eliminación de Datos</Link>
      </nav>
      <p>© {new Date().getFullYear()} Ceuta Co-Living. Todos los derechos reservados.</p>
    </footer>
  );
}
