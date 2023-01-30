import '@/styles/globals.css'
import { useState } from 'react';
export default function App({
  Component,
  pageProps
}) {

  const [ carrito, setCarrito ] = useState([])

  const agregarCarrito = anteojo => {
    // Comprobar si la anteojo ya esta en el carrito...
    if (carrito.some(anteojoState => anteojoState.id === anteojo.id)) {
      // Iterar para actualizar la cantidad
      const carritoActualizado = carrito.map(anteojoState => {
        if (anteojoState.id === anteojo.id) {
          anteojoState.cantidad = anteojo.cantidad;
        }
        return anteojoState;
      });
      // Se asigna al array
      setCarrito([...carritoActualizado]);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    } else {
      // En caso de que el articulo no exista, es nuevo y se agrega
      setCarrito([...carrito, anteojo]);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }
  }

  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter(producto => producto.id != id)
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  const actualizarCantidad = anteojo => {
    const carritoActualizado = carrito.map(anteojoState => {
      if (anteojoState.id === anteojo.id) {
        anteojoState.cantidad = parseInt(anteojo.cantidad)
      }
      return anteojoState
    })
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify(carrito));
  }
  return <Component {...pageProps  }
          carrito={carrito}
          agregarCarrito={agregarCarrito} 
          eliminarProducto={eliminarProducto}
          actualizarCantidad={actualizarCantidad} />
}