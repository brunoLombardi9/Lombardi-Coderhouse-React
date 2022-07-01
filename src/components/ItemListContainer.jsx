
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { Grid } from '@mui/material';
import Cargando from './Cargando';
import { useParams } from 'react-router-dom';
import { db } from '../utilities/firebase';
import { collection, getDocs } from 'firebase/firestore';


function ItemsListContainer() {
    const [items, setItems] = useState([])
    const { categoria } = useParams();
    const [loading, setLoading] = useState(true);
    let itemsAMostrar = [];


    useEffect(() => {

        const productosDb = collection(db, "productos");
        const query = getDocs(productosDb);

        query
            .then(res => {
                const productosExtraidos = res.docs.map(e => e.data());
                console.log(productosExtraidos);

                switch (categoria) {
                    case "Bajos":
                        const bajos = productosExtraidos.filter(product => product.category === "Basses");
                        itemsAMostrar = bajos;
                        break;
                    case "Guitarras":
                        const guitarras = productosExtraidos.filter(product => product.category === "Guitaras");
                        itemsAMostrar = guitarras;
                        break;
                    case "Baterias":
                        const baterias = productosExtraidos.filter(product => product.category === "Drums");
                        itemsAMostrar = baterias;
                        break;
                    case "Teclados":
                        const teclados = productosExtraidos.filter(product => product.category === "Keyboards");
                        itemsAMostrar = teclados;
                        break;
                    case "Microfonos":
                        const microfonos = productosExtraidos.filter(product => product.category === "Mics");
                        itemsAMostrar = microfonos;
                        break;
                    case "Consolas":
                        const consolas = productosExtraidos.filter(product => product.category === "Consoles");
                        itemsAMostrar = consolas;
                        break;
                    case "Amplificadores":
                        const amplificadores = productosExtraidos.filter(product => product.category === "Amplifiers");
                        itemsAMostrar = amplificadores;
                        break;
                    case "Pedales":
                        const pedales = productosExtraidos.filter(product => product.category === "Pedals");
                        itemsAMostrar = pedales;
                        break;
                    default:
                        itemsAMostrar = productosExtraidos;
                }
                setItems(itemsAMostrar);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, [categoria]);


    if (loading) {
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