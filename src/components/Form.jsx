import { Button, Grid } from "@mui/material";
import { useContext } from "react";
import { contexto } from "../CartContext";
import "./Form.css";


function Form({ handleChange, data, handleSubmit }) {

    const resultado = useContext(contexto);
    const vaciarCarrito = resultado.vaciarCarrito;

    return (
        <Grid container justifyContent="center" >
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Nombre"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                    required
                />

                <input
                    placeholder="E-mail"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                    required
                />

                <input
                    placeholder="Teléfono"
                    type="number"
                    name="phone"
                    onChange={handleChange}
                    value={data.phone}
                    required
                />


                <Grid container justifyContent="space-around" spacing={2} mt={2}>
                
                        <Button variant="outlined" onClick={vaciarCarrito}>Vaciar carrito</Button>
                        <Button variant="contained" 
                        disabled={data.name === "" || data.email === "" || data.phone === ""}
                        onClick={handleSubmit}>Finalizar Compra</Button>
                  
                </Grid>

            </form>
        </Grid>
    )
}

export default Form;