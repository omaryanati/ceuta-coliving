// pages/privacy-policy.tsx
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Política de Privacidad - Ceuta Co-Living</title>
        <meta name="description" content="Política de privacidad de Ceuta Co-Living" />
      </Head>

      <main style={{ maxWidth: '720px', margin: '2rem auto', padding: '0 1rem' }}>
        <h1>Política de Privacidad</h1>

        <p>
          En Ceuta Co-Living nos comprometemos a proteger tu privacidad. Esta política describe cómo recopilamos, usamos y protegemos tus datos personales.
        </p>

        <h2>Información que recopilamos</h2>
        <p>
          Recopilamos información cuando utilizas nuestra aplicación, incluyendo datos personales como nombre, correo electrónico y datos de uso.
        </p>

        <h2>Uso de la información</h2>
        <p>
          Utilizamos la información para ofrecer y mejorar nuestros servicios, personalizar tu experiencia y comunicarnos contigo.
        </p>

        <h2>Protección de datos</h2>
        <p>
          Implementamos medidas técnicas y organizativas para proteger tus datos contra accesos no autorizados.
        </p>

        <h2>Contacto</h2>
        <p>
          Si tienes preguntas sobre esta política, contáctanos en <a href="mailto:omaryanati@hotmail.es">omaryanati@hotmail.es</a>.
        </p>
      </main>
    </>
  );
}
