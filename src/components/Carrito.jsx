import { Button, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { contexto } from "../CartContext";
import './Carrito.css';

function Carrito() {

    const resultado = useContext(contexto);
    const carrito = resultado.carrito;
    const precioTotal = resultado.precioTotal;
    const vaciarCarrito = resultado.vaciarCarrito;

    const nuevosProductos = carrito.map(producto =>
        <tr>
            <td>{producto.brand} {producto.name}</td>
            <td>{producto.quantity}</td>
            <td>{producto.price} USD</td>
        </tr>
    );

    if (carrito.length > 0) {
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
                    <Grid container justifyContent="center" spacing={2} mt={2}>
                        <Grid item>
                            <Button variant="outlined" onClick={vaciarCarrito}>Vaciar carrito</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained">Finalizar Compra</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    } else {
        return (
            <Grid container justifyContent="center">
                <Grid item>
                    <Typography variant="h3">Carrito Vacio</Typography>
                </Grid>
            </Grid>
        )
    }
}

export default Carrito;
