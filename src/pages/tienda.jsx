import Layout from '@/components/layout'
import Anteojo from '@/components/anteojo'
import styles from '../styles/grid.module.css'

export default function Tienda({ anteojos }) {

  console.log(anteojos);
  return (
    <Layout
      title='Tienda'
      description='GafasMdq - Tienda | En esta seccion encontraras nuestra coleccion completa de anteojos'
    >
      <main className='contenedor'>
        <h2 className='heading'>Nuestra coleccion</h2>
        <div className={styles.grid}> 
          {
            anteojos.map(anteojo => (
              <Anteojo
                key={anteojo.id}
                anteojo={anteojo.attributes}
              />
            ))
          }
        </div>
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}anteojos?populate=imagenes`)
  const { data: anteojos } = await respuesta.json()

  return {
    props: {
      anteojos
    }
  }
}
// export async function getStaticProps(){
//   const respuesta = await fetch(`${process.env.API_URL}anteojos?populate=imagen`)
//   const {data: anteojos } = await respuesta.json()

//   return{
//     props:{
//       anteojos
//     }
//   }
// } 

