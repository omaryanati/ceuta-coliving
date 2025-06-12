// pages/data-removal.tsx
import Head from 'next/head';

export default function DataRemoval() {
  return (
    <>
      <Head>
        <title>Eliminación de Datos - Ceuta Co-Living</title>
        <meta name="description" content="Cómo solicitar la eliminación de tus datos en Ceuta Co-Living" />
      </Head>

      <main style={{ maxWidth: '720px', margin: '2rem auto', padding: '0 1rem' }}>
        <h1>Eliminación de Datos Personales</h1>

        <p>
          En Ceuta Co-Living respetamos tu derecho a solicitar la eliminación de tus datos personales.
        </p>

        <h2>Cómo solicitar la eliminación</h2>
        <p>
          Para solicitar que eliminemos tus datos, por favor envía un correo a <a href="mailto:omaryanati@hotmail.es">omaryanati@hotmail.es</a> con el asunto "Eliminación de datos".
        </p>

        <h2>Plazos</h2>
        <p>
          Responderemos a tu solicitud en un plazo máximo de 30 días naturales.
        </p>

        <h2>Consideraciones</h2>
        <p>
          Ten en cuenta que algunos datos pueden conservarse cuando exista obligación legal o interés legítimo.
        </p>
      </main>
    </>
  );
}
