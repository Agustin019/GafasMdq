import Layout from '@/components/layout'
import Post from '@/components/post'
import styles from '../styles/grid.module.css'

export default function Blog({ post }) {
  return (
    <Layout
      title='Blog'
      description='GafasMdq - Blog donde podras ver algunos tutoriales que te facilitaran el mantenimiento de tus anteojos'
    >
      <main className='contenedor'>
        <h2 className='titulo'>Blog</h2>
        <div className={styles.grid}>
          {
            post.map( post => (
              <Post 
                key={post.id}
                post={post.attributes}
              />
            ))
          }
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}anteojoposts?populate=imagen`)
  const { data: post } = await respuesta.json()

  return {
    props: {
      post
    }
  }
} 