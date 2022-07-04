import { Button, Grid, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { useContext, useEffect } from "react";
import { contexto } from "../CartContext";
import './Carrito.css';
import { Link } from "react-router-dom";

function Carrito() {

    const resultado = useContext(contexto);
    const carrito = resultado.carrito;
    const precioTotal = resultado.precioTotal;
    const vaciarCarrito = resultado.vaciarCarrito;
    const calcularTotal = resultado.calcularTotal;
    const eliminarItem = resultado.eliminarItem;

    const nuevosProductos = carrito.map(producto =>
        <tr>
            <td>{producto.brand} {producto.name}</td>
            <td>{producto.quantity}</td>
            <td>{producto.price} USD</td>
            <td><Button variant="contained" onClick={() => eliminarItem(`${producto.id}`)}><ClearIcon></ClearIcon></Button></td>
        </tr>
    );
    useEffect(() => {
        calcularTotal();
    });

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
            <Grid container justifyContent="center" height="20vh">
                <Typography variant="h3">Carrito Vacio</Typography>
                <Grid container justifyContent="center" alignItems="center" >
                    <Link to='/'><Button variant="contained">Regresar al index</Button></Link>
                </Grid>
            </Grid>
        )
    }
}

export default Carrito;
