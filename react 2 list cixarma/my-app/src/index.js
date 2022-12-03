 import 'bootstrap/dist/css/bootstrap.min.css';
 import 'bootstrap/dist/js/bootstrap.min.js';
 import React from 'react';
 import {createRoot} from 'react-dom/client';
 import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
 import Navbar from './navbar';
 import List from './list';
 import Detail from './detail';

 

const Index=()=> {



  return (
    <div>
    <Router>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<List></List>}></Route>
            <Route path="/detail/:slug/:id" element={<Detail></Detail>}></Route>
        </Routes>
    </Router>
    </div>
  )
}

let container=document.getElementById("root");
let root=createRoot(container);
root.render(<Index/>)
