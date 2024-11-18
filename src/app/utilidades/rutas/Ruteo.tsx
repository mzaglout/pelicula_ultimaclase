import { Route, Routes } from "react-router-dom";

import { Acerca } from "../../componentes/otros/Acerca";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { PeliAdmin } from "../../componentes/peliculas/PeliAdmin";
import { PeliCrear } from "../../componentes/peliculas/PeliCrear";
import { PeliListar } from "../../componentes/peliculas/PeliListar";
import { PeliActualizar } from "../../componentes/peliculas/PeliActualizar";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/pelicre" element={<PeliCrear />} />
      <Route path="/pelilis" element={<PeliListar />} />
      <Route path="/peliadm" element={<PeliAdmin />} />

      <Route path="/peliact/:codigo" element={<PeliActualizar />} />

      <Route path="/acer" element={<Acerca />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
