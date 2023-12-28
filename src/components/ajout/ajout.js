import React from 'react';
import axios from 'axios';

//let deps =[{dep:'Gestion de reseaux', superviseur:'Marc Grenier', code:'420.ab'},
//{dep:'Programmation web', superviseur:'Patrick Roy', code:'420.ac'},
//{dep:'AjoutSup', superviseur:'Test', code:'420.test'}];
 

class Ajout extends React.Component{
  constructor(props){
    //super pour lire les props pour utiliser le state
    super(props);
    //ou on va aller faire nos donnees ou des places ou on va mettre nes noms ,prenoms, codes
    this.state={
      
     
      Nom:' ',
      Prenom:' ',
      Code:' ',
      //on met le dep qui est selectionne
      dep:'',
      //deps est un tableau ou on met le dep qu'on va ajouter dans la liste
      deps:[]
    }
    //this.onChangeCode= this.onChangeCode.bind(this);
    //this.onChangeNom = this.onChangeNom.bind(this);
    //this.onChangePrenom = this.onChangePrenom.bind(this);
    //this.onChangeDep=this.onChangeDep.bind(this);
    //le onchange :comme il dit il ya un changement a chaque fois on tape une lettre
    //quand on tape une lettre ca appele la methode onchange ,onchange ecrit dans le setter en haut et puis dans le formulaire
    //on relie le this a la fonction onchange code si on fait pas ca il recoannait pas le this qui est en bas ligne 127
    this.handleChange=this.handleChange.bind(this);
    this.onSubmit= this.onSubmit.bind(this);
   
    
  }
  //componentdidmount faire charger le composant
  componentDidMount(){
    axios.get('http://localhost:3209/eco/Lire')


        .then(response =>{
          console.log(response.data);
          if(response.data.length > 0){
            //setState , on charge departement
            this.setState ({
              //.map aller lire et boucler chaqu'un des elements
              //dep=>dep.dep il va aller chercher dans la liste les dep qu'on a
              deps:(response.data.map(dep=>dep.Departement)),
              //mettre le dep qu'on acherche dans Departement
              Departement:(response.data.map(dep=>dep.Departement))[0].Departement,
            })
          }
        })
        .catch((error)=>{
          console.log(error);
        })
   
    }

    handleChange(e){
      //on recupere la value/name qui est en bas
      this.setState({[e.target.name]: e.target.value});
        console.log(e.target.name);
    }
  
  
  
  

  onSubmit(e){
    //preventDefault fait une gestion formulaire par defaut
    e.preventDefault();
    const util={
      //on met dans l'objet util les state (qu'on a deja en bas ligne 79..)
      //apres qu'on clique sur ajout il va aller chercher qu'on a entrer dans les state car l'information est deja dans les state
      Code: this.state.Code,
      Nom: this.state.Nom,
      Prenom: this.state.Prenom,
      Departement: this.state.dep
    }
    console.log(util);
    axios.post('http://localhost:3209/frian/Ajouter',util)
    .then(res=>{
      console.log(res.data)
    });
    this.setState({
      //on vide la formulaire et envoie du vide
      Prenom:'',
      Nom:'',
      Code:'',
      
      

    })
  }


  render (){
    return(
      <div className="container">

      <h3>Ajouter un utilisateur</h3> 
      <form onSubmit={this.onSubmit}>
      
      <div className="form-group">

      <label>Departements :</label>
      <select
        required
        className="form-control"
        name="dep"
        //onChange={this.onChangeDep}
        onChange={this.handleChange}>
          {
            //
            this.state.deps.map((dep)=> {
              return <option
              key={dep}
              value={dep}>{dep}
              </option>
            })
          }

        </select>
         
      
  
      

      
      <label>Nom :</label>
      <input type="text"
      //require verifie que le code est ecrit avent de l'envoyer
      required
      className="form-control"
      name="Nom"
      value={this.state.Nom}
      onChange={this.handleChange}
      
  
      />

     <label>Prenom :</label>
      <input type="text"
      required
      className="form-control"
      name="Prenom"
      value={this.state.Prenom}
      onChange={this.handleChange}
      
      />
      
      <label>Code :</label>
      <input type="text"
      required
      className="form-control"
      name="Code"
      value={this.state.Code}
      onChange={this.handleChange}
      
      />
      
       
      </div>
      
      <div className="form-group">
      
     <input type="submit" value="Ajout" className="btn btn-primary"/>
      
      </div>
      
      </form>
      </div>
    )
  }
}
//la bouton Ajouter est de type onsubmit (la methode qu'on a cree en haut)


export default Ajout;