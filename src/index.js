import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Home from './home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Axiosdemo from './axiosdemo';
// Import only necessary Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import ActionPage from './ActionPage';
import Comedy from   './Comedy';
import Drama  from  './Drama'; 


function Website(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/home' element={<Home/>} />
        <Route path='/axiosdemo' element={<Axiosdemo/>} />
        <Route path='/actionpage' element={<ActionPage/>} />
        <Route path='/comedy' element={<Comedy/>} />
        <Route path='/drama' element={<Drama/>} />
      </Routes>
    </BrowserRouter>

    // <div className='full-height'>
    //   <Home/>
    //   <Login/>
    // </div>
  );
}

ReactDOM.render(<Website/>, document.getElementById('root'));

