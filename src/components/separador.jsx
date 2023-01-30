import styles from '../styles/separador.module.css'
export default function Separador() {
  return (
    <section className={styles.separador}>
        <div className={`contenedor ${styles.grid}`}>
            <div className={styles.contenido}>
                <h2 className={styles.separador_titulo}>-30% abonando en efectivo </h2>
                <p>¡Ahorra en tus anteojos pagando en efectivo y disfruta de un descuento exclusivo en nuestra tienda!</p>
            </div>
        </div>
    </section>
  )
}
