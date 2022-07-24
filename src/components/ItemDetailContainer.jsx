import { Grid } from "@mui/material";
import {  doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productosDb } from "../utilities/firebase";
import Cargando from "./Cargando";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {

    const [product, setProduct] = useState();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        setLoading(true)
        const refProducto = doc(productosDb, id);
        const consulta = getDoc(refProducto);

        consulta
            .then(res => {
                const producto = res.data();
                setProduct(producto);
                setLoading(false);
            })
    }, [id]);


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