import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import BP_logo from "../img/BP_logo.svg"
import Home from "../utils/Home.jsx"
import { Routes, Route } from "react-router-dom";
import Root from "../cadastros/Root.jsx";



const Navbarmenu = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

   

    return (
        <>
    <header className="header__middle">
        <div className="container">
            <div className="row">

                

                <div className="header__middle__menus">
                    {/* Add Logo  */}
                <div className="header__middle__logo">
                    <NavLink exact activeClassName='is-active' to="/">
                        <img className='logoh' src={BP_logo} alt="logo" /> 
                    </NavLink>
                </div>

                    
                    <nav className="main-nav " >

                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}


                    <ul className={boxClass.join(' ')}>
                    
                    <li className="menu-item" ><NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Início </NavLink> </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/About`}> Comprar passagem </NavLink> </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> Minha Conta </NavLink> </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> Suporte </NavLink> </li>
                    <li className="menu-item " id="sair" ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> Sair </NavLink> </li>

                    </ul>


                    </nav>     
                </div>   



        
        
            </div>
	    </div>
    </header>
        
    


        <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/home" element={<Home/>} /> */}
        

      </Routes>
    
      </>   
       );
    
}

export default Navbarmenu;