import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../FirebaseAuthentication";
import { userLoggedIn } from '../../store/state.action';
import { getUser } from "../../store/state.selector";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Navbar = () => {
  const user = useSelector(getUser());

  const dispatch = useDispatch();

  const handleConnection = () => {
    signInWithGoogle().then((results) => {
      dispatch(userLoggedIn(results))
    });
  }

  return (

    <nav
      className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent">
      <div className="container">
        <div className="navbar-brand font-weight-bolder ms-sm-3">
          <Link className="text-white" to={{ pathname: `/` }}>Piccolo Cuistot</Link>
        </div>
        <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon mt-2">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
          <ul className="navbar-nav navbar-nav-hover mx-auto">

          </ul>

          <ul className="navbar-nav d-lg-block d-none">
            {!user ?
              <div className="btn btn-sm  bg-gradient-primary  btn-round mb-0 me-1 mt-2 mt-md-0" onClick={handleConnection}>
                Se connecter

              </div>
              :
              <li className="nav-item dropdown dropdown-hover mx-2">
                <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
                  <img className="avatar avatar-md rounded-circle" alt="Image placeholder" src={user.profilePic} />
                  <span className="mx-2"> {user.displayName}</span>
                  <FontAwesomeIcon icon="chevron-down" />

                </a>
                <div className="dropdown-menu dropdown-menu-animation dropdown-lg mt-0 mt-lg-3 p-3 border-radius-lg" aria-labelledby="dropdownMenuDocs">
                  <div className="d-none d-lg-block">
                    <ul className="list-group">
                      <li className="nav-item list-group-item border-0 p-0">
                        <a class="dropdown-item py-2 ps-3 border-radius-md" href="#">
                          <div class="d-flex">
                            <div class="icon h-10 me-3 d-flex mt-1">
                              <FontAwesomeIcon icon="user" />
                            </div>
                            <div>
                              <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Mes informations</h6>
                              <span class="text-sm">Mettre à jour mes informations</span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item list-group-item border-0 p-0">
                        <a class="dropdown-item py-2 ps-3 border-radius-md" href="#">
                          <div class="d-flex">
                            <div class="icon h-10 me-3 d-flex mt-1">
                              <FontAwesomeIcon icon="arrow-right-from-bracket" />
                            </div>
                            <div>
                              <h6 class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Se déconnecter</h6>
                              <span class="text-sm">Deconnexion de Piccolo Cuistot</span>
                            </div>
                          </div>
                        </a>
                      </li>

                    </ul>
                  </div>
                </div>
              </li>
            }
            {/* 
                <div className="btn btn-sm  bg-gradient-primary  btn-round mb-0 me-1 mt-2 mt-md-0">
                  <Link
                    to={{ pathname: `/addRecipe` }}
                    style={{ color: "white" }}
                  >
                    Ajouter une recette
                  </Link>
                </div>
              } */}
          </ul>
        </div>
      </div>
    </nav >
    // <div classNameName="container position-sticky z-index-sticky top-0">
    //   <nav classNameName="navbar navbar-expand-lg  blur blur-rounded top-0  z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
    //     <div classNameName="container">
    //       <div classNameName="navbar-brand font-weight-bolder ms-sm-3">
    //         <Link to={{ pathname: `/` }}>Piccolo Cuistot</Link>
    //       </div>
    //       <button
    //         classNameName="navbar-toggler shadow-none ms-2 collapsed"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navigation"
    //         aria-controls="navigation"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span classNameName="navbar-toggler-icon mt-1">
    //           <span classNameName="navbar-toggler-bar bar1"></span>
    //           <span classNameName="navbar-toggler-bar bar2"></span>
    //           <span classNameName="navbar-toggler-bar bar3"></span>
    //         </span>
    //       </button>

    //       <div classNameName="collapse navbar-collapse" id="navigation">
    //         <ul classNameName="navbar-nav navbar-nav-hover mx-auto"></ul>

    //         <ul classNameName="navbar-nav">
    //           <li classNameName="nav-item my-auto ms-3 ms-lg-0">
    //             {!user ?
    //               <div classNameName="btn btn-sm  bg-gradient-primary  btn-round mb-0 me-1 mt-2 mt-md-0" onClick={handleConnection}>
    //                 Se connecter
    //               </div>
    //               :
    //               <div classNameName="btn btn-sm  bg-gradient-primary  btn-round mb-0 me-1 mt-2 mt-md-0">
    //                 <Link
    //                   to={{ pathname: `/addRecipe` }}
    //                   style={{ color: "white" }}
    //                 >
    //                   Ajouter une recette
    //                 </Link>
    //               </div>
    //             }
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>

  );
};
