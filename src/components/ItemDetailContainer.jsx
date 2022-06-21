import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProductById from "../utilities/getProductById";
import Cargando from "./Cargando";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {

    const [product, setProduct] = useState();
    const { id } = useParams();

    console.log(id)

    useEffect(() => {
        getProductById(parseInt(id))
            .then(res => { setProduct(res) })
    }, [])

    if (product === undefined) {
        return <Cargando></Cargando>
    } else {
        return (
            <Grid container justifyContent={"center"}>
                <ItemDetail {...product}></ItemDetail>
            </Grid>
        )
    }

}

export default ItemDetailContainer;