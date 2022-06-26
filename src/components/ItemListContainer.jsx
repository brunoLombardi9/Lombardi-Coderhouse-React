
import { useState, useEffect } from 'react';
import products from '../utilities/products';
import timeOut from '../utilities/timeOut';
import ItemList from './ItemList';
import { Grid } from '@mui/material';
import Cargando from './Cargando';
import { useParams } from 'react-router-dom';

const bajos = products.filter(product => product.category === "Basses");
const guitarras = products.filter(product => product.category === "Guitars");
const baterias = products.filter(product => product.category === "Drums");
const teclados = products.filter(product => product.category === "Keyboards");
const microfonos = products.filter(product => product.category === "Mics");
const consolas = products.filter(product => product.category === "Consoles");
const amplificadores = products.filter(product => product.category === "Amplifiers");
const pedales = products.filter(product => product.category === "Pedals");
let itemsAMostrar = [];

function ItemsListContainer() {
    const [items, setItems] = useState([])
    const resultado = useParams();

    switch (resultado.categoria) {
        case "Bajos":
            itemsAMostrar = bajos;
            break;
        case "Guitarras":
            itemsAMostrar = guitarras;
            break;
        case "Baterias":
            itemsAMostrar = baterias;
            break;
        case "Teclados":
            itemsAMostrar = teclados;
            break;
        case "Microfonos":
            itemsAMostrar = microfonos;
            break;
        case "Consolas":
            itemsAMostrar = consolas;
            break;
        case "Amplificadores":
            itemsAMostrar = amplificadores;
            break;
        case "Pedales":
            itemsAMostrar = pedales;
            break;
        default:
            itemsAMostrar = products;
    }


    useEffect(() => {
        timeOut(2000, itemsAMostrar)
            .then(res => setItems(res))
    }, [itemsAMostrar]);


    if (items.length === 0) {
        return <Cargando></Cargando>

    } else {
        return (
            <Grid container justifyContent="center" spacing={2}>
                <ItemList productos={items}></ItemList>
            </Grid>
        );

    }

}



export default ItemsListContainer;