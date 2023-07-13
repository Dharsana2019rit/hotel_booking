import React from 'react';
import{
  Route,
  Routes,

} from 'react-router-dom';
import Home from './Home'
import Login from './Pages/Login';
import Registration from './Pages/Registration'
import Content from './Pages/Content'
import Mybookings from './Pages/Mybookings';
import Contact from './Pages/Contact';



function App() {
  return (
      
     
        <Routes>
        <Route path="/" exact element={<Home/>}>
          
        </Route>
        <Route path="/home" exact element={<Home/>}>
          
          </Route>
        <Route path="/registration" exact element={<Registration />}>
          
        </Route>
        <Route path="/login" exact element={<Login />}>
          
        </Route>
        <Route path="/content" exact element={<Content/>}>
          
        </Route> 
        <Route path="/booking" exact element={<Mybookings/>}>
          
        </Route>
        <Route path="/Contact" exact element={<Contact/>}>
          
        </Route> 
         {/* <Navigate replace to="./" /> */}
        </Routes>

  
  );
}
 export default App;