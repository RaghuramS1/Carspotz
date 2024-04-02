// import React, { useState ,useEffect} from 'react';
// import Image from '../Image/lo2.png' 
// import { Link } from 'react-router-dom'
// import { FaLocationDot } from "react-icons/fa6";
// import { IoMenu,IoClose  } from "react-icons/io5";



// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isCloseOpen, setIsCloseOpen] = useState(false);

//   useEffect(() => {
//     const navLinks = document.querySelector('.nav-links');
//     if (navLinks) {
//       navLinks.classList.toggle('top-[200%]', isMenuOpen);
//     }
//     if (navLinks) {
//       navLinks.classList.toggle('top-[80%]', isCloseOpen);
//     }
//   }, [isMenuOpen],[isCloseOpen]);

//   const toggleMenu = () => {
//     setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
//     setIsCloseOpen((prevIsCloseOpen) => !prevIsCloseOpen);
//   };
//   const [showLoc,setShowMenu]=useState(false);
//   const handleShowLoc=()=>{
//     setShowMenu(preve => !preve)
//   }

//   return (
//     <div>
//     <header className='fixed shadow-md w-full h-24 flex items-center'>
//      <nav className='flex justify-between items-center w-[92%] mx-auto'>
//       <div className='flex items-center gap-[50px]'>
//       {isMenuOpen ? (
//               <IoClose
//                 name="close"
//                 onClick={toggleMenu}
//                 className="text-3xl cursor-pointer md:hidden"
//               />
//             ) : (
//               <IoMenu
//                 name="menu"
//                 onClick={toggleMenu}
//                 className="text-3xl cursor-pointer md:hidden"
//               />
//             )}
//         <Link to='/'><img src={Image} className='h-16 '/></Link>
//       </div>
//       <div className='nav-links md:static absolute bg-[#fafafa] min-h-fit w-[50%]  fixed shadow md:shadow-none md:bg-[white] md:min-h-fit min-h[60vh] left-0 top-[-200%] md:w-auto w-full flex items-center px-5' >
//         <ul className='flex md:flex-row flex-col md:items-center md:gap-[10vw] gap-10'>
//         <li>
//         <Link to='/newcars' className='font-medium text-[#000000] hover:text-gray-500'>NEW CARS</Link>
//         </li>
//         <li>
//         <Link to='/reviews' className='font-medium text-[#000000] hover:text-gray-500'>REVIEWS</Link>
//         </li>
//         <li>
//         <input type='text'  className='border text-sm rounded-sm w-full h-8 p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black' placeholder='Search..'/>
//         </li>
//         </ul>
//       </div>
//       <div className='flex items-center gap-[5vw]'>
//         <div onClick={handleShowLoc}>
//       <FaLocationDot className='text-3xl hover:text-gray-500 cursor-pointer'/>
//       {
//           showLoc && (
//             <div className='absolute left-[82%] pt-[20px]'>
//               <p className='absolute bg-white py-2 px-2 shadow drop-shadow-md'>
//               <select>
//                 <option className='cursor-pointer'>Coimbatore</option>
//                 <option>Chennai</option>
//                 <option>Mumbai</option>
//                 <option>Delhi</option>
//                 <option>Bangalore</option>
//               </select>
//               </p>
//             </div>
//           )
//         }
//         </div>
        
//         <Link to='/login'><button className='bg-[#457dd9] text-white px-5 py-2 rounded-lg hover:bg-[#87acec]'>Login</button></Link>
//       </div>
//      </nav>
//     </header>





//       <header className='fixed shadow-md w-full h-20 px-2 md:px-4'>
      

//       <div className='flex items-center h-full justify-between'>
//         <Link to='/'>
//         <div className='flex'>
//             <img src={Image} className='h-8 px-20'/>
//             <nav className='flex px-44 md:gap-60 text-base md:text-lg'>                
//             <Link to='/newcars'>NEW CARS</Link>
//             <Link to='/reviews'>REVIEWS</Link>
//             </nav>
//         </div>
//         </Link>

//         <div className='flex item-center gap-96'>
//         <nav className='flex gap-4 md:gap-6 text-base md:text-lg'>
           
//             <Link to='/login'>LOGIN</Link>
//         </nav>
//         <div className='text-2xl text-black-600'>
//         <FaUser />
//         </div>
//       </div>

//       </div>

      
            
//       </header>
//     </div>
//   )
// }

// export default Header;





// Header.js

import React, { useState, useEffect } from 'react';
import Image from '../Image/lo2.png';
import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMenu, IoClose } from 'react-icons/io5';
import { IoIosSearch } from "react-icons/io";
import Search from '../pages/NewCars';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      navLinks.classList.toggle('bottom-[0]', isMenuOpen);
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const [showLoc, setShowMenu] = useState(false);
  const handleShowLoc = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div>
      <header
        className={`fixed shadow-md w-full h-24 flex items-center ${
          isScrolled ? 'scrolled' : ''
        }`}
      >
        <nav className='flex justify-between items-center w-[92%] mx-auto'>
          <div className='flex items-center gap-[50px]'>
            {isMenuOpen ? (
              <IoClose
                name='close'
                onClick={toggleMenu}
                className='text-3xl cursor-pointer md:hidden'
              />
            ) : (
              <IoMenu
                name='menu'
                onClick={toggleMenu}
                className='text-3xl cursor-pointer md:hidden'
              />
            )}
            <Link to='/'>
              <img src={Image} className='h-16' alt='logo' />
            </Link>
          </div>

          <div
            className={`nav-links md:static absolute bg-[#fafafa] min-h-fit w-[50%] fixed shadow md:shadow-none md:bg-[white] md:min-h-fit min-h[60vh] left-0 bottom-[0] md:w-auto w-full flex items-center px-5`}
          >
            <ul className='flex md:flex-row flex-col md:items-center md:gap-[10vw] gap-7'>
              <li className=''>
                <Search/>
              </li>
              <li>
                <Link
                  to='/newcars'
                  className='font-medium text-[#000000] hover:text-gray-500'
                >
                  NEW CARS
                </Link>
              </li>
              <li>
                <Link
                  to='/reviews'
                  className='font-medium text-[#000000] hover:text-gray-500'
                >
                  REVIEWS
                </Link>
              </li>
              <li>
              <FaLocationDot className='text-3xl hover:text-gray-500 cursor-pointer ' />
                {/* <div onClick={handleShowLoc}>
                  <FaLocationDot className='text-3xl hover:text-gray-500 cursor-pointer' />
                  {showLoc && (
                    <div className='absolute left-[82%] pt-[20px]'>
                      <p className='absolute bg-white py-2 px-2 shadow drop-shadow-md'>
                        <select>
                          <option className='cursor-pointer'>
                            Coimbatore
                          </option>
                          <option>Chennai</option>
                          <option>Mumbai</option>
                          <option>Delhi</option>
                          <option>Bangalore</option>
                        </select>
                      </p>
                    </div>
                  )}
                </div> */}
              </li>
              <li>
                <Link
                  to='/login'
                  className='font-medium bg-[black] text-[white] pr-[20px] pt-[10px] pb-[10px] pl-[20px] rounded-md'
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

