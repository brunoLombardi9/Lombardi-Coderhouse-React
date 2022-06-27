import { createContext, useState } from "react";

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

    const calcularUnidades = () => {
        let cantidadTotal = 0;
        carrito.forEach(e => {
            cantidadTotal += e.quantity;
        });
        setCantidadItems(cantidadTotal);
    }

    const calcularTotal = () => {
        let total = 0;
        carrito.forEach(e => {
            total = total + (e.price * e.quantity);
        });
        setPrecioTotal(total);
        calcularUnidades();
    }

    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadItems(0);
    }

    const evitarRepetidos = (producto) => {
        return carrito.find(e => {
            return e.id === producto.id;
        })
    }

    const contenidoContexto = {
        carrito: carrito,
        cantidadItems: cantidadItems,
        precioTotal: precioTotal,
        comprobarCarrito: comprobarCarrito,
        calcularTotal: calcularTotal,
        vaciarCarrito: vaciarCarrito,
        evitarRepetidos: evitarRepetidos,
    }


    return (
        <Provider value={contenidoContexto}>
            {children}
        </Provider>

    )

}
