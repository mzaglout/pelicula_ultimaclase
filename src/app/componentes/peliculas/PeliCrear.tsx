export const PeliCrear = () => {
  return (
    <>
      <div className="pt-4 d-flex justify-content-center">
        <div className="col-md-8">
          <form className="row g-3 needs-validation">
            <div className="col-md-6">
              <label htmlFor="nomp" className="form-label">
                Nombre Pelicula
              </label>
              <input
                type="text"
                className="form-control border-info"
                id="nomp"
                name="nomp"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="dura" className="form-label">
                Duracion
              </label>
              <input
                type="text"
                className="form-control border-info"
                id="dura"
                name="dura"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="prot" className="form-label">
                Protagonista
              </label>
              <input
                type="text"
                className="form-control border-info"
                id="prot"
                name="prot"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="gene" className="form-label">
                Genero
              </label>
              <select className="form-select border-info" id="gene" name="gene" required>
                <option selected disabled value="">
                  Seleccione el genero
                </option>
                <option>Accion</option>
                <option>Comedia</option>
                <option>Drama</option>
                <option>Terror</option>
              </select>
            </div>

            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Registrar Pelicula
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
