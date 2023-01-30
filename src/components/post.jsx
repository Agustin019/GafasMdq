import Image from "next/image"
import Link from "next/link"
import styles from '../styles/blog.module.css'
import { formatearFecha } from "@/utils/helpers"


export default function Post({ post }) {

    const { contenido, imagen ,titulo, publishedAt, url } = post
    return (
        <article className={styles.contenedor}>
            <Image src={imagen.data.attributes.url} width={200} height={200} alt={`Imagen del post ${titulo}`}/>
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{ formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>
                <Link className={styles.enlace} href={`/blog/${url}`}>Leer post</Link>
            </div>
        </article>
    )
}
