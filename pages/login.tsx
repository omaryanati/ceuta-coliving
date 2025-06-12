// pages/login.tsx
import Head from 'next/head';
import { signIn } from 'next-auth/react';
import styles from '../styles/Login.module.css';
import Footer from '../components/Footer';

export default function Login() {
  return (
    <>
      <Head>
        <title>Iniciar sesión - Ceuta Co-Living</title>
        <meta name="description" content="Login para acceder a Ceuta Co-Living" />
      </Head>

      <header className={styles.header}>
        <h1>Ceuta Co-Living</h1>
      </header>

      <main className={styles.container}>
        <div className={styles.loginBox}>
          <h2 className={styles.loginTitle}>Iniciar sesión</h2>

          <p className={styles.welcomeText}>
            Bienvenido a Ceuta Co-Living, tu espacio para compartir, conectar y crecer juntos.
          </p>

          <button
            className={styles.googleButton}
            onClick={() => signIn('google')}
          >
            <img 
              src="/logo-google-96.svg" 
              alt="Google logo" 
              className={styles.googleLogo} 
            />
            Iniciar sesión con Google
          </button>

          <button
            className={styles.facebookButton}
            onClick={() => signIn('facebook')}
          >
            <img 
              src="/logo-facebook-96.svg"
              alt="Facebook logo"
              className={styles.facebookLogo} 
            />
            Iniciar sesión con Facebook
          </button>

          <section className={styles.features}>
            <div className={styles.loginInfoContainer}>
              <p className={styles.loginInfo}>Conéctate con otros residentes fácilmente.</p>
              <p className={styles.loginInfo}>Reserva espacios y eventos desde tu móvil.</p>
              <p className={styles.loginInfo}>Gestiona tu estancia y pagos online sin complicaciones.</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
