import Layout from '@/components/layout'
import Image from 'next/image'
import styles from '../styles/nosotros.module.css'
function Nosotros() {
  return (
    <Layout
        title='Nosotros'
        description='GafasMdq - Sobre Nosotros'
    >
        <main className='contenedor'>
          <h2 className={styles.titulo}>Nosotros</h2>

          <div className={styles.contenido}>
            <Image src='/img/anteojos-bg2.webp' width={1000} height={800} alt='Imagen sobre nosotros'/>
            <div>
              <p>GafasMdq es una empresa líder en el mercado de gafas y anteojos. Ofrecemos una amplia variedad de productos para satisfacer las necesidades de nuestros clientes, desde anteojos de lectura hasta anteojos de sol de alta calidad. Nuestros productos son diseñados con los más altos estándares de calidad y estilo, y ofrecemos una gran variedad de diseños, estilos y marcas para elegir. Además, ofrecemos un servicio excepcional al cliente y garantizamos la satisfacción de nuestros clientes. ¡Visítenos en nuestra tienda y encuentre el par perfecto de gafas para usted!</p>
            </div>
          </div>
        </main>
    </Layout>
  )
}

export default Nosotros