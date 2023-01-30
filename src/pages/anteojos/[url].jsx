import Image from "next/image"
import Link from "next/link"
import styles from '../../styles/anteojoUrl.module.css'
import Layout from "@/components/layout";

export default function AnteojoUrl({ anteojo }) {
    console.log(anteojo);
    const { nombre, imagenes, precio, descripcion } = anteojo[0].attributes
    return (
        <Layout
            title={`Guitarra ${nombre}`}
        >
            <div className={` ${styles.anteojo}`}>
                <div className={styles.img}>
                    <Image src={imagenes.data[0].attributes.formats.medium.url} alt={`imagen del anteojo:${nombre}`} width={400} height={350} />
                    <div className={styles.img_secundarias}>
                        <Image src={imagenes.data[1].attributes.formats.medium.url} alt={`imagen del anteojo:${nombre}`} width={150} height={250} />
                        <Image src={imagenes.data[2].attributes.formats.medium.url} alt={`imagen del anteojo:${nombre}`} width={150} height={250} />
                    </div>
                </div>

                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>
                    <Link className={styles.enlace} href={''}>Agregar al carrito</Link>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}anteojos`)
    const { data } = await respuesta.json()

    const paths = data.map(anteojo => ({
        params: {
            url: anteojo.attributes.url
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { url } }) {
    const respuesta = await fetch(`${process.env.API_URL}anteojos?filters[url]=${url}&populate=imagenes`)
    const { data: anteojo } = await respuesta.json()

    return {
        props: {
            anteojo
        }
    }
}


// export async function getServerSideProps({query: {url} }){
//     const respuesta = await fetch(`${process.env.API_URL}anteojos?filters[url]=${url}&populate=imagenes`)
//     const { data: anteojo } = await respuesta.json()

//     return{
//         props:{
//             anteojo
//         }
//     }
// }

