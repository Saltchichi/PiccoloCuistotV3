import { Link } from "react-router-dom";

export const SearchBar = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="col-12 col-md-10 col-lg-8">
        <div className="row bg-white shadow-lg mt-n6 border-radius-md p-3 pb-1 mx-sm-0 mx-1 position-relative">

          <div className="col-12 mt-n2 mt-2">
            <label className="">Chercher une recette</label>
            <div className="input-group mb-4">
              <span className="input-group-text">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
              <input className="form-control" type="text" />
            </div>
          </div>

        </div>
        <div class="d-flex justify-content-center">
          <div className="col-8 col-md-6 col-lg-4 mt-n3 p-2">
            <label className="">&nbsp;</label>
            <button type="button" className="btn bg-gradient-primary w-100 mb-0">
              <Link
                to={{ pathname: `/addRecipe` }}
                style={{ color: "white" }}
              >
                Ajouter une recette
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
