// import logo from './logo.svg';
// import './App.css';
// import './Component/Header.css'
// import Login from './pages/Login'
// import NewCars from './pages/NewCars' 
// import Reviews from './pages/Reviews'
// import SignUp from './pages/SignUp';
// import Search from './pages/Search'
// import ForgetPassword from './pages/ForgetPassword';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Component/Home';

function App() {
  return (
    <div>
      <Home/>
    {/* <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/NewCars' element={<NewCars/>}/>
    <Route path='/reviews' element={<Reviews/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='/Search' element={<Search/>}/>
    <Route path='/ForgetPassword' element={<ForgetPassword/>}/>
    </Routes>
    </BrowserRouter> */}
    </div>

  );
}

export default App;
