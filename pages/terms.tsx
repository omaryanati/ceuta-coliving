// pages/terms.tsx
import Head from 'next/head';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Términos y Condiciones - Ceuta Co-Living</title>
        <meta name="description" content="Términos y condiciones de uso de Ceuta Co-Living" />
      </Head>

      <main style={{ maxWidth: '720px', margin: '2rem auto', padding: '0 1rem' }}>
        <h1>Términos y Condiciones</h1>

        <p>
          Al usar Ceuta Co-Living aceptas estos términos y condiciones. Por favor, léelos cuidadosamente.
        </p>

        <h2>Uso del servicio</h2>
        <p>
          Puedes utilizar nuestra plataforma para conectar con otros residentes y gestionar tu estancia, siempre respetando las normas aquí descritas.
        </p>

        <h2>Responsabilidades</h2>
        <p>
          No nos hacemos responsables por el uso indebido de la plataforma o por contenido generado por usuarios.
        </p>

        <h2>Modificaciones</h2>
        <p>
          Nos reservamos el derecho a modificar estos términos en cualquier momento. Te recomendamos revisarlos periódicamente.
        </p>

        <h2>Contacto</h2>
        <p>
          Para dudas o consultas, escríbenos a <a href="mailto:omaryanati@hotmail.es">omaryanati@hotmail.es</a>.
        </p>
      </main>
    </>
  );
}
