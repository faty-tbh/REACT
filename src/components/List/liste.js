import React from "react"
import Genlist from "./Genlist"
import axios from "axios"

//les deux lignes'map'
/*let utils=[{code:'RoyPa', nom:'Roy',prenom:'Paul'},
{code:'Gualo', nom :'Gual', prenom:'Lu'},
{code:'TbhF', nom:'Tbh', prenom:'Faty'}];*/


class Liste extends React.Component{
    constructor(props){
        super(props);
        this.state={
            utilisateurs:[]
        }
        
        this.deleteUtil=this.deleteUtil.bind(this)
    }
          
    
    componentDidMount(){
        //this.setState({ utilisateurs: utils})

        axios.get('http://localhost:3209/frian/Lire')


        .then(response =>{
          console.log(response.data);
          if(response.data.length > 0){
            this.setState ({
              utilisateurs: response.data
            })
          }
        })
        .catch((error)=>{
          console.log(error);
        })
      }

    

    deleteUtil(id){
      axios.delete('http://localhost:3209/frian/Supprimer/'+id)
      .then(res => console.log(res.data));
      this.setState({
        utilisateurs:this.state.utilisateurs.filter(el =>el._id !==id)
      })
    }
    
    userList(){
      //permet l'affichage 
      //on a fournit la liste utilisateurs a map pour boucler et a chaque passage dans la boucle on met une ligne(2 fois)
        return this.state.utilisateurs.map(utilCourant =>{
          //on appelle Genlist et je lui donne a chaque fois utilCourant ,on a utilise key a cause qu'on a une liste
            return <Genlist utilisateur={utilCourant} deleteUtil={this.deleteUtil} key={utilCourant._id}/>;
          })
    }
  

    render (){
        return(
        
        <div className="container">
          <h3>Liste des utilisateurs</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                
                <th>Nom</th>
                <th>Prenom</th>
                <th>Code</th>
                <th>Departement</th>
              </tr>
    
            </thead>
            <tbody>
             {this.userList()}
            </tbody>
    
          </table>
          </div>
    
      )
    }
    }
  
    
    export default Liste;
