import * as React from 'react';
import { CardMedia, Typography,Grid } from '@mui/material/';
import ItemCount from './ItemCount';


function ItemDetail({ id, brand, title, price, pictureUrl, description }) {

    return(
    <Grid container justifyContent="center">
            <Grid item md={6} justifyContent="center">
                <CardMedia
                    component="img"
                    image={pictureUrl}
                    alt= {id} />
            </Grid>
     
            <Grid item md={6} sm={10} flexDirection="column" justifyContent="center">
                <Typography variant="h3" textAlign="center">{brand} {title}</Typography>
                <Typography variant="h4" textAlign="center">{description}</Typography>
                <Typography variant="h5" textAlign="center">{price} Usd</Typography>
                <ItemCount initial={0} stock={5}></ItemCount>
            </Grid>

    </Grid>
    )
}


export default ItemDetail;