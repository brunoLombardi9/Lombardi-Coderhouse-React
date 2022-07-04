import { useContext, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, CardActions, Grid, styled, Typography } from '@mui/material';
import { contexto } from '../CartContext';

const ButtonSmall = styled(Button)({
    borderRadius: "100px",
    height: "30px"
});

function ItemCount({ initial, stock, onAdd, product }) {

    const [contador, setContador] = useState(initial);
    const resultado = useContext(contexto);
    const agregarAlCarrito = resultado.agregarAlCarrito;

    function restar() {
        if (contador > initial) {
            setContador(contador - 1);
        }
    }

    function sumar() {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    function confirmarContador() {
        onAdd(contador);
        agregarAlCarrito(product, contador);
    }


    return (
        <>
            <CardActions sx={{ justifyContent: "center" }} >
                <ButtonSmall variant="contained" onClick={restar}><RemoveIcon></RemoveIcon></ButtonSmall>
                <Typography ml={1} mr={1} textAlign="center">{contador}</Typography>
                <ButtonSmall variant="contained" onClick={sumar}><AddIcon></AddIcon></ButtonSmall>
            </CardActions>
            <Grid container justifyContent="center">
                <Button onClick={confirmarContador}>Agregar al Carrito</Button>
            </Grid>
        </>
    )

}

export default ItemCount;