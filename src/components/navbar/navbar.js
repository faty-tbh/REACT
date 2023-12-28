import React from "react"
import { Link } from "react-router-dom";


class Navbar extends React.Component{

    render(){
        return(

            <div className='container'>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

       <div className="container-fluid">

        <a className="navbar-brand" href="/" >Bienvenue</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"

        aria-controls="navbar">

            <span className="navbar-toggler-icon"></span>

        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

            <div className="navbar-nav">

                <Link to="/liste" className="nav-link">Utilisateurs</Link>

                <Link to="/ajout" className="nav-link">Ajout d'utilisateurs</Link>

                <Link to="/ajoutDep" className="nav-link">Ajout Departements</Link>

                

            </div>

           

        </div>

        </div>    



    </nav>

</div>

        )
    }
}
export default Navbar;