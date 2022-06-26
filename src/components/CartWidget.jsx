import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext } from "react";
import { contexto } from "../CartContext";



function CartWidget() {

  const resultado = useContext(contexto);


    return (
        <Button color="secondary" variant="contained"><ShoppingCartOutlinedIcon fontSize="medium"></ShoppingCartOutlinedIcon> {resultado.cantidadItems}</Button>
    );
}

export default CartWidget;