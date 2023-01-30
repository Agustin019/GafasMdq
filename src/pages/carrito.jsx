import { useState, useEffect } from "react"
import Layout from "@/components/layout"
import styles from '../styles/carrito.module.css'
import Image from "next/image"

export default function Carrito({ carrito, actualizarCantidad }) {

    const [ total, setTotal ] = useState(0)

    useEffect(()=>{
        const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad) * (producto.precio),0)
        setTotal(calculoTotal)

    },[carrito])
    return (
        <Layout
            title="GafasMdq - carrito de compras"
        >
            <main className="contenedor">
                <h1 className="titulo"> Carrito</h1>
                <div className={styles.contenido}>
                    <div className={styles.carrito}>
                        <h2>Articulos</h2>
                        {
                            carrito.lenght === 0
                                ? 'carrito vacio'
                                : (
                                    carrito.map(producto => (
                                        <div key={producto.id} className={styles.producto}>
                                            <div>
                                                <Image src={producto.imagen} width={350} height={480} alt={`Imagen del anteojo ${producto.nombre}`} />
                                            </div>
                                            <div>
                                                <div className={styles.cantidad}>
                                                <h2 className={styles.nombre}>{producto.nombre}</h2>
                                                    <p>Cantidad:</p>
                                                    <select
                                                        className={styles.select}
                                                        value={producto.cantidad}
                                                        onChange={e => actualizarCantidad({
                                                            id: producto.id,
                                                            cantidad: e.target.value
                                                        })}
                                                    >
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select>
                                                </div>
                                                <p className={styles.precio}>$<span>{producto.precio}</span></p>
                                                <p className={styles.subtotal}>Subtotal:${producto.cantidad * producto.precio}</p>
                                            </div>
                                        </div>
                                    ))
                                )
                        }
                    </div>
                    <aside className={styles.resumen}>
                        <h3>Resumen del pedido</h3>
                        <p>Total a pagar: ${total}</p>
                    </aside>
                </div>
            </main>
        </Layout>
    )
}
