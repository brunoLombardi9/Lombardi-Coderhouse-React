import { Button, Grid, TextField, Typography } from "@mui/material";
import { collection, getDocs, query } from "firebase/firestore";
import { useState } from "react";
import { db } from "../utilities/firebase";
import TablaPedido from "./TablaPedido";
import Cargando from "./Cargando";
import { Link } from "react-router-dom";




function Tracking() {
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false);
    const [tracking, setTracking] = useState([]);
    const [error, setError] = useState(false);
    const [resultado, setResultado] = useState(false)


    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const resetTracking = () => {
        setTracking([]);
        setError(false);
        setResultado(false);
        setInput("");
    }

    const handleSubmit = () => {
        setLoading(true);
        const ordenes = collection(db, "ordenes");
        const ordenesFiltradas = query(ordenes);
        const consulta = getDocs(ordenesFiltradas);


        consulta
            .then(res => {
                return res
            }
            )
            .then(res => {
                const todasLasOrdenes = res.docs;
                const filtrarOrdenes = todasLasOrdenes.filter(e => e.id === input);
                const ordenEncontrada = filtrarOrdenes.map(e => e.data());
                return ordenEncontrada;
            })
            .then(res => {
                if (res.length > 0) {
                    setTracking(res);
                }
                setResultado(true);
                setLoading(false);
            }
            )
            .catch(setError(true))

    }

    const sinResultados = () => {
        if (resultado && tracking.length === 0) {
            return "No encontramos lo que buscabas";
        }
    }

    const huboError = () => {
        if (error) {
            return "Hubo un problema, intente nuevamente";
        }
    }

    const huboResultado = () => {
        if(resultado && tracking.length > 0){
            return(
                <>
                <Typography variant="h4" mb="20px" >Orden: {input}</Typography>
                <TablaPedido array={tracking} ></TablaPedido>
                </>
            )
        }
    }



    if (resultado === false && tracking.length === 0) {
        return (
            <>
                <Grid container justifyContent="center" >
                    <Grid item>
                        <Typography variant="h3">Ingrese el Id de su compra:</Typography>
                        <TextField
                            placeholder="Id de compra"
                            type="text"
                            name="id"
                            onChange={handleChange}
                            value={input}
                            sx={{
                                width: "100%",
                                mt: "15px"
                            }}
                            required
                        />
                    </Grid>
                </Grid>

                <Grid container justifyContent="center">
                    <Link to={`./${input}`}><Button onClick={handleSubmit} variant="contained" sx={{ mt: "20px" }}>Consultar</Button></Link>
                </Grid>
            </>

        )
    } else if (loading) {
        return (
            <Cargando></Cargando>
        )
    } else {
        return (
            <Grid container justifyContent="center" >
                <Typography variant="h2" textAlign="center" width="100%">
                    {sinResultados}
                    {huboError}
                    {huboResultado}
                </Typography>
                <Grid item >
                    <Link to="/tracking"><Button variant="contained" onClick={resetTracking} sx={{ mt: "20px", m: "15px" }}>Buscar de nuevo</Button></Link>
                </Grid>
                <Grid item >
                    <Link to="/"><Button variant="contained" sx={{ mt: "20px", m: "15px" }}>Volver al Index</Button></Link>
                </Grid>
            </Grid>
        )
    } 

}

export default Tracking;