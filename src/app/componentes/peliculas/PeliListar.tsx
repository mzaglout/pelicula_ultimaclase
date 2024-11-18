import { useState } from "react";
import { Pelicula } from "../../modelos/Pelicula";
import { ARREGLO_PELICULAS } from "../../mocks/Pelicula-mocks";
import { ARREGLO_PELICULA_GENERO } from "../../utilidades/dominios/DomGenero";

export const PeliListar = () => {

  const [arrPeliculas] = useState<Pelicula[]>(ARREGLO_PELICULAS);

  const obtenerNombre = (valor: string)=>{
    for(const objGene of ARREGLO_PELICULA_GENERO){
      if (objGene.codGenero == valor) {
        return objGene.nombreGenero;
      }
    }
  }

  return (
    <>
      <div className="pt-4 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Nombre peliculas</th>
                <th>Genero</th>
                <th>Protagonista</th>
                <th>Imagen</th>
              </tr>
            </thead>
            <tbody>

              {arrPeliculas.map((miPeli: Pelicula)=>(
              <tr>
                <th>{miPeli.codPelicula}</th>
                <td>{miPeli.nombrePelicula}</td>
                <td>{obtenerNombre(miPeli.codGeneroPelicula)}</td>
                <td>{miPeli.protagonistaPelicula}</td>
                <td>{miPeli.imagenPelicula}</td>
              </tr>
              ))}


            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
