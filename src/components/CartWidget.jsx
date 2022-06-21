import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function CartWidget() {

    return (
        <Button color="secondary" variant="contained"><ShoppingCartOutlinedIcon fontSize="medium"></ShoppingCartOutlinedIcon></Button>
    );
}

export default CartWidget;