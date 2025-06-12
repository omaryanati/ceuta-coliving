import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <a href="/privacy-policy" className={styles.link}>Política de Privacidad</a>
        <span className={styles.separator}>|</span>
        <a href="/terms" className={styles.link}>Condiciones del Servicio</a>
        <span className={styles.separator}>|</span>
        <a href="/data-removal" className={styles.link}>Eliminación de Datos</a>
      </nav>
      <p>© {new Date().getFullYear()} Ceuta Co-Living. Todos los derechos reservados.</p>
    </footer>
  );
}
