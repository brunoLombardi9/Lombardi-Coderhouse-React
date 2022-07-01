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
            const nuevoCarrito = [...carrito];
            nuevoCarrito.push(nuevoProducto);
            setCarrito(nuevoCarrito);
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
            total += (e.price * e.quantity);
        });
        setPrecioTotal(total);
        calcularUnidades();
    }

    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadItems(carrito.length);
    }

    const evitarRepetidos = (producto) => {
        return carrito.find(e => {
            return e.id === producto.id;
        })
    }

    const eliminarItem = (id) => {
        const nuevoArray = [...carrito];
        const item = nuevoArray.find(e => e.id === id);
        nuevoArray.splice(nuevoArray.indexOf(item), 1);
        setCarrito(nuevoArray);
    }

    const contenidoContexto = {
        carrito: carrito,
        cantidadItems: cantidadItems,
        precioTotal: precioTotal,
        comprobarCarrito: comprobarCarrito,
        calcularTotal: calcularTotal,
        vaciarCarrito: vaciarCarrito,
        evitarRepetidos: evitarRepetidos,
        eliminarItem: eliminarItem,
    }


    return (
        <Provider value={contenidoContexto}>
            {children}
        </Provider>

    )

}
