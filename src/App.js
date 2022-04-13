
import './App.scss';
import Navbar from '../src/components/Navbar';

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
          <div>
            <Navbar />
          </div>
          {MenuElems.map((item,index) => {
            return (<li key={uuid()}><Link to={item.path}> {item.text} </Link></li>);
          } 
          )}
        </ul>
      </nav>
      {MenuElems.map(function showRoutes(item,index){
        return (<Route path ={item.path}key={uuid()}>{item.componentSite}</Route>);
      })}
    </Router>
  );
}

export default App;
