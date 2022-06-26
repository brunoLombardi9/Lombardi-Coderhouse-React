import * as React from 'react';
import { CardMedia, Typography, Grid, Button } from '@mui/material/';
import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { contexto } from '../CartContext';


function ItemDetail({ product }) {

    const resultado = useContext(contexto);
    const [cantidad, setCantidad] = useState();


    const onAdd = (valorContador) => {
        setCantidad(valorContador);
    }


    if (cantidad > 0) {
        return (
            <Grid container justifyContent="center">
                <Grid item md={6} justifyContent="center">
                    <CardMedia
                        component="img"
                        image={product.pictureUrl}
                        alt={product.id} />
                </Grid>

                <Grid item md={6} sm={10} flexDirection="column" justifyContent="center">
                    <Typography variant="h3" textAlign="center">{product.brand} {product.title}</Typography>
                    <Typography variant="h4" textAlign="center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta commodi, suscipit quasi deleniti necessitatibus repellat </Typography>
                    <Typography variant="h5" textAlign="center">{product.price} Usd</Typography>
                    <Grid container justifyContent="center">
                        <Link to='/cart' onClick={ () => resultado.comprobarCarrito(product, {cantidad})}><Button variant="contained">Agregar al carrito</Button></Link>
                    </Grid>


                </Grid>

            </Grid>

        );
    } else {
        return (
            <Grid container justifyContent="center">
                <Grid item md={6} justifyContent="center">
                    <CardMedia
                        component="img"
                        image={product.pictureUrl}
                        alt={product.id} />
                </Grid>

                <Grid item md={6} sm={10} flexDirection="column" justifyContent="center">
                    <Typography variant="h3" textAlign="center">{product.brand} {product.title}</Typography>
                    <Typography variant="h4" textAlign="center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta commodi, suscipit quasi deleniti necessitatibus repellat </Typography>
                    <Typography variant="h5" textAlign="center">{product.price} Usd</Typography>
                    <ItemCount initial={0} stock={5} onAdd={onAdd}></ItemCount>
                </Grid>

            </Grid>
        )
    }
}


export default ItemDetail;