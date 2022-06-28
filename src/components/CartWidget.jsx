import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext } from "react";
import { contexto } from "../CartContext";
import { Link } from "react-router-dom";

function CartWidget() {

  const resultado = useContext(contexto);
  const carrito = resultado.carrito;

if(carrito.length === 0){
  return
}else{
  return (
    <Link to="./cart">
      <Button color="secondary" variant="contained"><ShoppingCartOutlinedIcon fontSize="medium"></ShoppingCartOutlinedIcon> {resultado.cantidadItems}</Button>
    </Link>
  );
}

}

export default CartWidget;