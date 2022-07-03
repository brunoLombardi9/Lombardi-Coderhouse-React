
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


    useEffect(() => {

        const productosDb = collection(db, "products");
        const query = getDocs(productosDb);

        query
            .then(res => {
                console.log(res)
                const productosExtraidos = res.docs.map(e => e.data());
                setItems(productosExtraidos)
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