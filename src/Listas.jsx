import { Cards } from "./Cards";
import { useState } from "react";

const Listas = () => {

    const frutas = [
        {id: 1, nombre: '30 secconds to mars', imagen: 'img1.jpg'},
        {id: 2, nombre: 'Radiohead Creep', imagen: 'img2.jpg'},
        {id: 3, nombre: 'Linkin Park', imagen: 'img3.jpg'},
    ];
    const [total, setTotal]= useState(0);
    const [busqueda, setBusqueda] = useState("");

    const musicaFiltrada = frutas.filter((fruta) => 
        fruta.nombre.toLowerCase().includes(busqueda.toLowerCase())
    )

  return (
    <div style={{
       padding: "10px",
       display: "flex",
       flexDirection: "column",
       alignItems: "center", 
    }}>
        <h1>Total de likes de musica: {total} </h1>

        <input style={{
            padding: "10px", 
            marginBottom: "20px", 
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            }} 
            type="texto" 
            placeholder="ingrese el nombre de la musica "
            value={busqueda}
            onChange={(e)=>{
                setBusqueda(e.target.value);
            }} 
        />

        <div style={{display: "flex", gap: "10px"}}>

            {musicaFiltrada.length === 0 && (
                <p style={{ color: "#ccc",fontSize: "20px" }}>
                    No se encontraron resultados: {busqueda}
                </p>
            )}

            {musicaFiltrada.map((fruta) => {
                return <Cards 
                    key={fruta.id} 
                    nombre={fruta.nombre} 
                    img={fruta.imagen}
                    onLike={() => {
                        setTotal(total + 1);
                    }} 
                />
            })}
        </div>
    </div>
  )
}

export default Listas