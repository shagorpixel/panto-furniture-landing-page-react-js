import { useContext, useEffect, useState } from "react";
import { FaBagShopping, FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import {Link,NavLink, useNavigate } from "react-router-dom";
import { cardContext } from "../App";
import CardContainer from "./CardContainer";

const navItemsarray = [
    {path:'/',label:'Furniture'},
    {path:'/shop',label:'Shop'},
    {path:'/about',label:'About'},
    {path:'/contact',label:'Contact'},
]

function Navitems({toggleMenuHandle}) {
    return (
      <ul className=" flex flex-col md:flex-row md:space-x-8 gap-8">
        {
            navItemsarray.map((single,index)=>(

                <li key={index}> <NavLink to={single.path} onClick={toggleMenuHandle}  className= { ({isActive}) =>
                     isActive ? " text-primary font-semibold" : ''
                  }>
                  {single.label}</NavLink></li>
                
            ))
        }
        <li className=" md:hidden text-center" onClick={toggleMenuHandle} ><NavLink to={'/card'} className= { ({isActive}) =>
                     isActive ? " text-primary font-semibold" : ''
                  }>Card</NavLink>
        </li>
      </ul>
    )
}


const Navber = () => {
    const [isMenuOpen,setisMenuOpen] = useState(false);
    const [isScrolled,setIsScrolled] =  useState(false);
    const [isCardOpen,setisCardOpen] =  useState(false);
    const [cardProducts,cardHandle] = useContext(cardContext)

    // when Scroll
    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY>50){
                setIsScrolled(true)
            }else{
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll',handleScroll)
    },[])

    const toggleMenuHandle = ()=>{
        setisMenuOpen(prev=> !prev)
    }
    return (
        <header className={`font-primary py-3 fixed left-0 top-0 z-50 w-full transition 
        ${isScrolled?'bg-white text-black shadow-lg shadow-amber-900':'text-white bg-transparent'}}`}>
            <nav className=" section-container flex items-center justify-between ">
                {/*logo start */}
                <div>
                    <Link className=" font-bold text-2xl">Panto</Link>
                </div>
                { /*logo end */}
                {/* Dextop Nav Items */}
                <div className=" hidden md:block">
                    <Navitems></Navitems>
                </div>
                {/* Dextop Nav End */}
                {/* Mobile Menu Icon */}
                <div onClick={toggleMenuHandle} className=" md:hidden hover:text-primary text-xl cursor-pointer">
                {/* Mobile Menu Icon */}
                {isMenuOpen?null:<FaBars />}
                </div>
                {/* End Mobile Menu Icon */}

                {/* Moblie Menu Items */}
                <div className={` md:hidden fixed left-0 top-0 h-screen bg-black/80 text-white w-full flex flex-col items-center justify-center text-center transition transform ${isMenuOpen? ' translate-x-0':'-translate-x-full ' }`}>

                    <div onClick={toggleMenuHandle} className=" cursor-pointer absolute right-5 top-5">
                    <IoClose className=" text-2xl" />
                    </div>
                    <Navitems toggleMenuHandle={toggleMenuHandle} ></Navitems>
                </div>
                {/* Moblie Menu Items End */}

                {/* Card List */}
                <div className={` fixed right-0 top-14 hidden md:block  w-full max-w-lg p-4  bg-white shadow-md transition ${
                    isCardOpen? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <CardContainer></CardContainer>
                </div>
                {/* Card List */}
                
                <div onClick={()=>setisCardOpen(prev=> !prev)}  className=" hidden md:block relative cursor-pointer">
        
                    <FaBagShopping className=" text-xl" />
                    <sup className=" absolute -right-3 -top-1 h-5 w-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">{cardProducts.length}</sup>
                    
                </div>
                
            </nav>
        </header>
    );
};

export default Navber;