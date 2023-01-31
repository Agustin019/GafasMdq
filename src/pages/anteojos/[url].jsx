import { useState } from "react";
import Image from "next/image"
import styles from '../../styles/anteojoUrl.module.css'
import Layout from "@/components/layout";
import { Toast } from "@/utils/alert";
export default function AnteojoUrl({ anteojo, agregarCarrito }) {

    const [cantidad, setCantidad] = useState(0)
    const { nombre, imagenes, precio, descripcion } = anteojo[0].attributes

    const handleSubmit = e => {
        e.preventDefault()

        if (cantidad < 1) {
            Toast.fire({
                icon: 'error',
                title: '¡Seleccione una cantidad valida!',
                
              })
            return
        }

        const anteojoSeleccionado = {
            id: anteojo[0].id,
            imagen: imagenes.data[0].attributes.formats.medium.url,
            nombre,
            precio,
            cantidad,
        }

        agregarCarrito(anteojoSeleccionado);
      
        Toast.fire({
            icon: 'success',
            title: '¡Agregado al carrito correctaemente!',           
          })
    }
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

                    <form
                        className={styles.formulario}
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="cantidad">Cantidad</label>
                        <select
                            onChange={e => setCantidad(+e.target.value)}
                            id="cantidad"
                        >
                            <option value="0">-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <input
                            type="submit"
                            className={styles.enlace}
                            value='Agregar al carrito'
                        />
                    </form>
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



