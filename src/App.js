
import './App.css';

import uuid from 'react-uuid';
import{
  BrowserRouter as Router,
  Route,
  Link
}from "react-router-dom"
import MenuElems from './data/MenuElems';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          {MenuElems.map(function creaEnlace(item,index) {
            return (<li key={uuid()}><Link to={item.path}> {item.text} </Link></li>);
          } )}
        
        </ul>
      </nav>
      {MenuElems.map(function showRoutes(item,index){
        return (<Route path ={item.path}key={uuid()}>{item.componentSite}</Route>);
      })}
        {/*<Route path = "/" exact ><div/></Route>
        <Route path = "/Pepe"><MiPrimerComponenteClase nombre = " Pepe " apellido =" Perez " color="red"/></Route>
        <Route path = "/Juan"><MiPrimerComponenteClase nombre = " Juan " apellido =" Martin "color="blue"/></Route>
        <Route path = "/Luis"><MiPrimerComponenteClase nombre = " Luis " apellido =" Pueblo "color="green"/></Route>
        <Route path = "/Manu"><MiPrimerComponenteClase nombre = " Manu " apellido =" Cobos "color="purple"/></Route>    
        */}
  </Router>
  );
}

export default App;
