import React from 'react'
import { useNavigate, useParams} from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios"


const Edit = ()=> {
  const Navigate= useNavigate();
  const { id } = useParams();
  console.log(id);

  const[Code,setCode] =useState('');
  const[Nom,setNom] =useState('');
  const[Prenom,setPrenom] =useState('');


  useEffect(()=>{
    const url =`http://localhost:3209/frian/lireUnUtilisateur/${id}`;
    axios.get(url)
    .then((response)=>{
      const {Code , Nom, Prenom} =response.data;
      setCode(Code);
      setNom(Nom);
      setPrenom(Prenom);
    })
    .catch((err)=>{
      console.log(err);
    });
    

  },[]);

  const onChangeNom=(e)=>{
    setNom(e.target.value)
  }
  const onChangePrenom=(e)=>{
    setPrenom(e.target.value)
  }
  const onChangeCode=(e)=>{
    setCode(e.target.value)
  }

  
  

  const onSubmit =(e)=>{
    e.preventDefault();
    setCode('');
    setNom('');
    setPrenom('');
    console.log('la fonction est appelee');
    
    const util={
    Code:Code,
    Nom: Nom,
    Prenom: Prenom
    }
    

    axios.put('http://localhost:3209/frian/Modifier/'+id, util)

    .then(res=>{
      console.log(res.data);
      Navigate('/liste')
    });

    

  }
 

  

  return (
    <div className="container">

    <h3>Modifier un utilisateur</h3> 
    <form onSubmit={onSubmit}>
    
    <div className="form-group">
    
    <label>Nom :</label>
    <input type="text"
    required
    className="form-control"
    name="Nom"
    value={Nom}
    //onChange={e=> setNom(e.target.value)}
    onChange={onChangeNom}
    />
    </div>
   <div className='form-control'>
   <label>Prenom :</label>
    <input type="text"
    required
    className="form-control"
    name="Prenom"
    value={Prenom}
    //onChange={e=> setPrenom(e.target.value)}
    onChange={onChangePrenom}
    />
    </div>
    <div className='form-control'>
    <label>Code :</label>
    <input type="text"
    required
    className="form-control"
    name="Code"
    value={Code}
    //onChange={e=> setCode(e.target.value)}
    onChange={onChangeCode}
    
    
    
    />
    
     
    </div>
    
    <div className="form-group">
   <input type="submit" value="Modifier" className="btn btn-primary"/>
    
    </div>
    
    </form>
    </div>
    
  )
}

export default Edit

