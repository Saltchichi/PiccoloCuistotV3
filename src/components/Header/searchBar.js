export const SearchBar = () => {
  return (
    <div class="container d-flex justify-content-center">
      <div className="col-8">
        <div class="row bg-white shadow-lg mt-n6 border-radius-md pb-4 p-3 mx-sm-0 mx-1 position-relative">
          <div class="col-lg-3 mt-lg-n2 mt-2">
            <label class=""></label>
            <button type="button" class="btn bg-gradient-dark w-100 mb-0">
              Ajouter une recette
            </button>
          </div>
          <div class="col-lg-9 mt-lg-n2 mt-2">
            <label class="">Chercher une recette</label>
            <div class="input-group mb-4">
              <span class="input-group-text">
                <i class="fas fa-search" aria-hidden="true"></i>
              </span>
              <input class="form-control" placeholder="..." type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
