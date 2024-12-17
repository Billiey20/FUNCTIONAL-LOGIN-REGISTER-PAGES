import React from 'react';
import AuthContainer from './components/AuthContainer';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';


function App() {
  return (
    <>
    
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
<Route path='/authContainer' element = {<AuthContainer />}></Route> 
<Route path='/home' element = {<Home />}></Route>

    </Routes>
    </BrowserRouter>

    </>
      
  )
}

export default App;
