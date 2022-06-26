import { Grid, TableContainer, Typography } from "@mui/material";
import { useContext } from "react";
import { contexto } from "../CartContext";
import './Carrito.css';

function Carrito() {

    const resultado = useContext(contexto);
    const carrito = resultado.carrito;
const calcularTotal = resultado.calcularTotal;
const precioTotal = resultado.precioTotal;

    const nuevosProductos = carrito.map(producto =>
        <tr>
            <td>{producto.brand} {producto.name}</td>
            <td>{producto.quantity}</td>
            <td>{producto.price} USD</td>
        </tr>
    );

    return (
        <Grid container justifyContent="center">
            <Grid item>
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nuevosProductos}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{precioTotal} USD</td>
                        </tr>
                    </tbody>
                </table>
            </Grid>
        </Grid>
    )
}

export default Carrito;
