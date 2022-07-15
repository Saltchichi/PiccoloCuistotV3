import React, { Component } from "react";
class header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <header>
        <div
          className="page-header section-height-40"
          style={{
            backgroundImage:
              'url("https://www.pxwall.com/wp-content/uploads/2018/06/Wallpaper%20French%20croissants,%20fruit,%20berries,%20strawberry,%20raspberry,%20delicious,%204k,%20Food%207069410852.jpg")',
          }}
        >
          <span className="mask bg-gradient-dark"></span>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-white text-center">
                <h2 className="text-white">Bienvenue sur Cooked</h2>
                <p className="lead">
                  Stockez toutes vos recettes ou trouvez-en de nouvelles !
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="position-relative overflow-hidden"
          style={{ height: "36px", marginTop: "-33px" }}
        >
          <div
            className="w-full absolute bottom-0 start-0 end-0"
            style={{
              transform: "scale(2)",
              transformOrigin: "top center",
              color: "#fff",
            }}
          >
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <div
          className="position-relative overflow-hidden"
          style={{ height: "36px", marginTop: "-33px" }}
        ></div>
        {/* <div class="container">
                    <div class="row bg-white shadow-lg mt-n6 border-radius-md pb-4 p-3 mx-sm-0 mx-1 position-relative">
                        <div class="col-lg-3 mt-lg-n2 mt-2">
                            <label class="">Categorie</label>
                            <select name="category" id="category"></select>
                        </div>
                        <div class="col-lg-3 mt-lg-n2 mt-2">
                            <label class="">To</label>
                            
                        </div>
                        <div class="col-lg-3 mt-lg-n2 mt-2">
                            <label class="">Depart</label>
                            <div class="input-group">
                                <span class="input-group-text"><i class="fas fa-calendar" aria-hidden="true"></i></span>
                                <input class="form-control datepicker flatpickr-input" placeholder="Please select date" type="text" readonly="readonly"/>
          </div>
                            </div>
                            <div class="col-lg-3 mt-lg-n2 mt-2">
                                <label class="">&nbsp;</label>
                                <button type="button" class="btn bg-gradient-dark w-100 mb-0">Search</button>
                            </div>
                        </div>
                    </div> */}
      </header>
    );
  }
}

export default header;
