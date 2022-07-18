import { Button, Grid } from "@mui/material";
import { useContext } from "react";
import { contexto } from "../CartContext";




export const tablaProductos = (array) => {
const pedido = array[0].carrito;

   
   const tabla =  pedido.map(producto =>
        <tr>
            <td>{producto.brand} {producto.name}</td>
            <td>{producto.quantity}</td>
            <td>{producto.price} USD</td>
            <td></td>
        </tr>
    );
    return tabla

}

function  precioTotal(array){
    const pedido = array[0].carrito;
    let total = 0;
    pedido.forEach(e => {
        total += (e.price * e.quantity);
    });
    return total
}

export default function TablaPedido({array}){

    

    return(
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
                    {tablaProductos(array)}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{precioTotal(array)} USD</td>
                    </tr>
                </tbody>
            </table>

        </Grid>

    </Grid>
    )
}
