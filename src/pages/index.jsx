import Anteojo from '@/components/anteojo';
import Post from '@/components/post';
import Layout from '@/components/layout'
import styles from '../styles/grid.module.css'
import Separador from '@/components/separador';

export default function Home({ anteojos, posts }) {

  return (
    <>
      <Layout
        title={'inicio'}
        description={'¡Venta de los anteojos de ultima moda y calidad!'}
      >
 
          <h1 className={styles.titulo}>Nuestra coleccion</h1>
          <section className='contenedor'>
            <div className={styles.grid}>
              {
                anteojos?.map(anteojo => (
                  <Anteojo
                    key={anteojo.id}
                    anteojo={anteojo.attributes}
                  />
                ))
              }
            </div>
          </section>
          <Separador/>
          <section className='contenedor'>
            <h2 className='titulo'>Blog</h2>
              <div className={styles.grid}>
                  {
                    posts?.map( post => (
                      <Post key={post.id} post={post.attributes} />
                    ))
                  }
              </div>
          </section>
  
      </Layout>
    </>
  )
}


export async function getStaticProps() {
  const urlAnteojos = `${process.env.API_URL}anteojos?populate=imagenes`;
  const urlPosts = `${process.env.API_URL}anteojoposts?populate=imagen`;

  const [resAnteojos, resPosts] = await Promise.all([
    fetch(urlAnteojos),
    fetch(urlPosts)
  ])

  const [{ data: anteojos }, { data: posts }] = await Promise.all([
    resAnteojos.json(),
    resPosts.json()
  ])

  return {
    props: {
      anteojos,
      posts
    }
  }
}