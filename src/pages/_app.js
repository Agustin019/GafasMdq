import '@/styles/globals.css'
import { useState, useEffect } from 'react';
export default function App({
  Component,
  pageProps
}) {

  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : []
  const [carrito, setCarrito] = useState(carritoLS)

  const [ paginaLista, setPaginaLista ] = useState(false)
  useEffect(()=>{
    setPaginaLista(true)
  },[]) 

  useEffect(()=>{
    localStorage.setItem('carrito', JSON.stringify(carrito))
  },[carrito])

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
  return paginaLista ? <Component {...pageProps}
  carrito = {carrito}
  agregarCarrito = {agregarCarrito}
  eliminarProducto = {eliminarProducto}
  actualizarCantidad = {actualizarCantidad}
  />: null
}