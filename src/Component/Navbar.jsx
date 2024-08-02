import React, { useEffect, useState } from 'react';
import '../Style/style.css'

const Navbar = () => {
    const[sticky,setSticky]=useState(false)
  useEffect(()=>{

    const handleScroll=()=>{
      if(window.scrollY>0){
        setSticky(true);
      }
      else{
        setSticky(false);
      }
      window.addEventListener('scroll',handleScroll);

      return ()=>{
        window.removeEventListener('scroll',handleScroll)
      }
    }
  },[])
  return (
    <>
    <div className = {`max-w-screen-2xl bg-black container mx-auto md:px-20 fixed top-0 left-0 right-0 z-40 ${sticky?"sticky-navbar shadow-lg bg-base-200 duration-300 transition-all ease-in-out":""} `}>
    <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100  text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a href='/'>Logout</a></li>
        <li><a href='/Allfood'>All Food </a></li>
        <li><a href='/'>Category</a></li> 
      </ul>
    </div>
    <div></div>
    <p className="Book-store btn btn-ghost text-xl text-white cursor-pointer md:hidden">
        SnackSaver
    </p>
    <p className="Book-store text-base text-black cursor-pointer hidden md:block">
  <div>
    <button className="button" data-text="Awesome">
      <span className="actual-text">&nbsp;SnackSaver&nbsp;</span>
      <span aria-hidden="true" className="hover-text">&nbsp;SnackSaver&nbsp;</span>
    </button>
  </div>
</p>
  </div>
  <div className="search-container ">
  < input placeholder="Search here" className="input" name="text" type="text"  />
  </div>
  <div className="navbar-end h-10 ">
  <div className="navbar-center hidden lg:flex  ">
    <ul className="menu menu-horizontal px-1 text-white">
      <li><a href='/'>Logout</a></li>
      <li><a href='/Allfood'>All Food</a></li>
      <li><a href='/'>Category</a></li> 
      {/* <li><a>About</a></li>
      <li><a>Contact</a></li> */}
    </ul>
  </div>
        
    
 
</div>
  </div>
    </div>
    </>
  );
}

export default Navbar;
