import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NewCars from './pages/NewCars';
import Reviews from './pages/Reviews';
import MThar from './pages/MThar';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route index element={<Home/>}/>
    <Route path='newcars' element={<NewCars/>}/>
    <Route path='Reviews' element={<Reviews/>}/>
    <Route path='Login' element={<Login/>}/>
    <Route path='Signup' element={<Signup/>}/>
    <Route path='MThar' element={<MThar/>}/>
    </Route>

  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
