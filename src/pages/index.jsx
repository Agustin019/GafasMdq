import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/layout'

export default function Home() {
  return (
    <>
      <Layout
        title={'inicio'}
        description={'¡Venta de los anteojos de ultima moda y calidad!'}
      >
          <h2>Hola mundo desde next JS</h2>
          <Link href='/nosotros'>Nosotros</Link>
      </Layout>
    </>
  )
}
