import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, CardActions, Grid, styled, Typography } from '@mui/material';

const ButtonSmall = styled(Button)({
    borderRadius: "100px",
    height: "30px"
});

function ItemCount({ initial, stock, onAdd }) {

    const [contador, setContador] = useState(initial);

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

    function confirmarContador(e) {
        onAdd(contador);
    }


    return (
        <>
            <CardActions sx={{ justifyContent: "center" }} >
                <ButtonSmall variant="contained" onClick={restar}><RemoveIcon></RemoveIcon></ButtonSmall>
                <Typography ml={1} mr={1} textAlign="center">{contador}</Typography>
                <ButtonSmall variant="contained" onClick={sumar}><AddIcon></AddIcon></ButtonSmall>
            </CardActions>
            <Grid container justifyContent="center">
                <Button onClick={confirmarContador}>Confirmar</Button>
            </Grid>
        </>
    )

}

export default ItemCount;