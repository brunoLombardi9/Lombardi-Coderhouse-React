import { Button, Grid, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { useContext, useEffect, useState } from "react";
import { contexto } from "../CartContext";
import './Tabla.css';
import { Link } from "react-router-dom";
import Form from "./Form";
import { ordenes } from "../utilities/firebase";
import { addDoc, serverTimestamp } from "firebase/firestore";
import Cargando from "./Cargando";

function Carrito() {

    const resultado = useContext(contexto);
    const [data, setData] = useState({ name: "", email: "", phone: "", address: "" });
    const [idOrden, setIdOrden] = useState("");
    const [loading, setLoading] = useState();


    const carrito = resultado.carrito;
    const precioTotal = resultado.precioTotal;
    const calcularTotal = resultado.calcularTotal;
    const eliminarItem = resultado.eliminarItem;
    const vaciarCarrito = resultado.vaciarCarrito;

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value, });
    }

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();

        const orden = {
            cliente: {
                nombre: data.name,
                telefono: data.phone,
                email: data.email,
                direccion: data.address
            },
            carrito,
            total: precioTotal,
            fecha: serverTimestamp()
        }


        addDoc(ordenes, orden)
            .then(res => {
                setIdOrden(res.id);
                vaciarCarrito();
                setLoading(false);
            })
            .catch(error => console.log(error));
    }

    const nuevosProductos = carrito.map(producto =>
        <tr key={producto.id}>
            <td>{producto.brand} {producto.name}</td>
            <td>{producto.quantity}</td>
            <td>{producto.price} USD</td>
            <td><Button variant="contained" onClick={() => eliminarItem(`${producto.id}`)}><ClearIcon></ClearIcon></Button></td>
        </tr>
    );

    useEffect(() => {
        calcularTotal();
    });

    if (loading) {
        return (
            <Cargando></Cargando>
        )
    }

    if (idOrden !== "") {
        return (
            <Grid container>
                <Typography textAlign="center" variant="h2">Gracias por su compra! la referencia de su orden es : {idOrden}</Typography>
            </Grid>
        )
    }

    if (carrito.length > 0) {
        return (
            <>
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

                <Grid item>
                    <Form handleChange={handleChange} data={data} handleSubmit={handleSubmit}></Form>
                </Grid>
            </>
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
