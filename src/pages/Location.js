import React from 'react'
import { FaUserAlt,FaLock  } from "react-icons/fa";
import './Login.css'
import Header from '../Component/Header';
import { Link } from 'react-router-dom';
function LoginForm(){


return (
    <>
    <div className=''>

 <form className='form'>
   <h1 style={{textAlign: 'center',color: '#000000',fontSize:'35px'}}>Login</h1>
   <div className='input-box'>
    <select className='input'>
        <option>dfdg</option>
        <option>dfdg</option>
        <option>dfdg</option>
    </select>
    </div>
 </form>
</div>
    </>
)
}
export default LoginForm;