import { createContext, useContext, useState } from "react";
import products from './utilities/products';

export const contexto = createContext();
export const Provider = contexto.Provider;


export function CartContext({ children }) {

    const [carrito, setCarrito] = useState([]);
    const [cantidadItems, setCantidadItems] = useState(0);
    const [precioTotal, setPrecioTotal] = useState(0);

    const comprobarCarrito = (producto, unidades) => {
        const isInCart = carrito.find(e => e.id === producto.id);

        if (isInCart) {
            return;
        } else {
            const nuevoProducto = {
                id: producto.id,
                brand: producto.brand,
                name: producto.title,
                price: producto.price,
                quantity: unidades.cantidad,

            };
            carrito.push(nuevoProducto);
            calcularTotal();
        }
    }

    const calcularTotal = () => {
       let total = 0;
        carrito.forEach(e => {
           total = total + (e.price * e.quantity);
        });
        setPrecioTotal(total);
    }

    const contenidoContexto = {
        carrito: carrito,
        cantidadItems: cantidadItems,
        precioTotal: precioTotal,
        comprobarCarrito: comprobarCarrito,
        calcularTotal: calcularTotal,
    }

    return (
        <Provider value={contenidoContexto}>
            {children}
        </Provider>

    )

}
