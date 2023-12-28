import React from 'react';
import axios from 'axios';

class AjoutDep extends React.Component{
  constructor(props){
    super(props);
    this.state={
      Departement:'',
      Superviseur:'',
      Codedep:''
    }
    //this.onChangeDep= this.onChangeDep.bind(this);
    //this.onChangeSup = this.onChangeSup.bind(this);
    //this.onChangeCode = this.onChangeCode.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.onSubmit= this.onSubmit.bind(this);
   
    
  }
  
  
  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
      console.log(e.target.name);
  }
  

  onSubmit(e){
    e.preventDefault();
    const departement={
      Departement: this.state.Departement,
      Superviseur: this.state.Superviseur,
      Codedep: this.state.Codedep
    }
    console.log(departement);
    axios.post('http://localhost:3209/eco/Ajouter',departement)
    .then(res=>{
      console.log(res.data)
    });
    this.setState({
      Departement:'',
      Superviseur:'',
      Codedep:''
    })
  }


  render (){
    return(
      <div className="container">

      <h3>Ajouter un departement</h3> 
      <form onSubmit={this.onSubmit}>
      
      <div className="form-group">
      
      <label>Departement :</label>
      <input type="text"
      required
      className="form-control"
      name="Departement"
      value={this.state.Departement}
      onChange={this.handleChange}
      
  
      />

     <label>Superviseur :</label>
      <input type="text"
      required
      className="form-control"
      name="Superviseur"
      value={this.state.Superviseur}
      onChange={this.handleChange}
      
      />
      
      <label>Code :</label>
      <input type="text"
      required
      className="form-control"
      name="Codedep"
      value={this.state.Codedep}
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


export default AjoutDep;