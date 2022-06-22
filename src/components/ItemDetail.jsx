import * as React from 'react';
import { CardMedia, Typography, Grid, Button } from '@mui/material/';
import ItemCount from './ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function ItemDetail({ id, brand, title, price, pictureUrl, description }) {

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
                        image={pictureUrl}
                        alt={id} />
                </Grid>

                <Grid item md={6} sm={10} flexDirection="column" justifyContent="center">
                    <Typography variant="h3" textAlign="center">{brand} {title}</Typography>
                    <Typography variant="h4" textAlign="center">{description}</Typography>
                    <Typography variant="h5" textAlign="center">{price} Usd</Typography>
                    <Grid container justifyContent="center">
                        <Link to='/cart'><Button variant="contained">Finalizar Compra</Button></Link>
                    </Grid>


                </Grid>

            </Grid>

        )
    } else {
        return (
            <Grid container justifyContent="center">
                <Grid item md={6} justifyContent="center">
                    <CardMedia
                        component="img"
                        image={pictureUrl}
                        alt={id} />
                </Grid>

                <Grid item md={6} sm={10} flexDirection="column" justifyContent="center">
                    <Typography variant="h3" textAlign="center">{brand} {title}</Typography>
                    <Typography variant="h4" textAlign="center">{description}</Typography>
                    <Typography variant="h5" textAlign="center">{price} Usd</Typography>
                    <ItemCount initial={0} stock={5} onAdd={onAdd}></ItemCount>
                </Grid>

            </Grid>
        )
    }
}


export default ItemDetail;