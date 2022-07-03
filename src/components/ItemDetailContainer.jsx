import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cargando from "./Cargando";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {

    const [product, setProduct] = useState();
    const { id } = useParams();
    const [loading, setLoading] = useState();

    useEffect(() => {


setLoading(false);
    }, [product])

    if (loading) {
        return <Cargando></Cargando>
    } else {
        return (
            <Grid container justifyContent={"center"}>
                <ItemDetail product={product}></ItemDetail>
            </Grid>
        )
    }

}

export default ItemDetailContainer;