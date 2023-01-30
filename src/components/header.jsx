import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'
import ImagenCarrito from '../../public/img/carrito.png'

function Header() {

    const router = useRouter()
  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
            <div className={styles.logo}>
                 <Image src='/img/gafas-de-sol.png' width={80} height={20} alt='imagen logo'/>
                 <h1>GafasMdq</h1>
            </div>
            <nav className={styles.navegacion}>
                <Link 
                    href='/'
                    className={router.pathname === '/' ? styles.activo : '' }
                > 
               Inicio
                </Link>

                <Link 
                    href='/tienda'
                    className={router.pathname === '/tienda' ? styles.activo : '' }
                > 
              Tienda 
                </Link>

                <Link 
                    href='/nosotros'
                    className={router.pathname === '/nosotros' ? styles.activo : '' }
                > 
               Nosotros
                </Link>

                <Link 
                    href='/blog' 
                    className={router.pathname === '/blog' ? styles.activo : '' }>
                Blog</Link>

                <Link href={'/carrito'}>
                    <Image src={ImagenCarrito} width={30} height={30} alt='Icono del carrito de compras'/>
                </Link>
            </nav>
        </div>

    </header>
  )
}

export default Header