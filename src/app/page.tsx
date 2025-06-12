import Head from 'next/head';
import styles from '../styles/Login.module.css'; // Reutilizando estilos del login
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ceuta Co-Living - Inicio</title>
        <meta name="description" content="Bienvenido a Ceuta Co-Living, tu espacio para compartir y crecer juntos." />
      </Head>

      <header className={styles.header}>
        <h1>Ceuta Co-Living</h1>
      </header>

      <main className={styles.container}>
        <section className={styles.loginBox}>
          <h2 className={styles.loginTitle}>Bienvenido a Ceuta Co-Living</h2>
          <p className={styles.welcomeText}>
            Tu espacio para compartir, conectar y crecer juntos en Ceuta. Descubre una comunidad vibrante y espacios diseñados para ti.
          </p>
          {/* Aquí puedes añadir botones, links o secciones extras */}
        </section>
      </main>

      <Footer />
    </>
  );
}
