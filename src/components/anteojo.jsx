import Image from "next/image"
import Link from "next/link"
import styles from '../styles/anteojos.module.css'

function Anteojo({ anteojo }) {

  const { nombre, precio, imagenes, url } = anteojo
  return (
    <div className={styles.anteojo}>
      <Image  src={imagenes.data[0].attributes.formats.medium.url} alt={`imagen del anteojo:${nombre}`}  width={300} height={350}/>  
     <div className={styles.contenido}>
       <h3>{nombre}</h3>
       <p className={styles.precio}>${precio}</p>
       <Link className={styles.enlace} href={`/anteojos/${url}`}>Ver Producto</Link>
     </div>
    </div>
  )
}

export default Anteojo