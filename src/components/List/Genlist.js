import React from "react"

import { Link } from "react-router-dom";


class Genlist extends React.Component{
    render (){
      return(
        <tr>
  
        
        <td>{this.props.utilisateur.Nom}</td>
        
        <td>{this.props.utilisateur.Prenom}</td>
        <td>{this.props.utilisateur.Code}</td> 
        <td>{this.props.utilisateur.Departement}</td>

        <td>
        <Link to={"/edit/" + this.props.utilisateur._id}>edition |  </Link>
          <a href='##' onClick={() => {this.props.deleteUtil(this.props.utilisateur._id)}}>supression</a>
        </td>
        
        
        </tr>
        
    )
  }
  }
  
  export default Genlist;