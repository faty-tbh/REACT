import {BrowserRouter,Routes, Route, Navigate} from "react-router-dom";
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar/navbar';
import List from './components/List/liste';
import Ajout from './components/ajout/ajout';
import AjoutDep from './components/ajout/ajoutDep';
import Logo from './components/logo/logo';
import Edit from './components/edit/edit';
import "bootstrap/dist/js/bootstrap.bundle.min.js"





class App extends React.Component{
  render (){
    return(
    <div className="container">
       
      <BrowserRouter>
      <Navbar/>
      <Logo/>
      
      <Routes>
      
      
      <Route path="/logo" element={<Logo/>}/>
      <Route path="/liste" element={<List/>} />
      <Route path="/ajout" element={<Ajout/>} />
      <Route path="/ajoutDep" element={<AjoutDep/>} />
      
      <Route path="/edit/:id" element={<Edit/>} />
      
      
      </Routes>
      
      </BrowserRouter>
          
    </div>
  );
}
}

export default App;
