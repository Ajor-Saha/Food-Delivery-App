import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import restu from "../../assets/images/resturant.jpeg"
import Navbar from "./Navbar";
import { Card } from "./Card";


function Header() {
  
  
  return (
    <div className="bg-white flex justify-between py-3 fixed w-full top-0 z-10">
      <div>
        <a href="#" className="">
            <img src={restu} alt="" height={80} width={80}/>
        </a>
      </div>
      <div className="hidden md:block mt-3">
        <nav>
          <ul className="flex space-x-4 text-xl font-semibold">
            <li>
              <Link to="/" className="hover:text-red-400">Home</Link>
            </li>
            <li>
              <Link to="/food" className="hover:text-red-400">Foods</Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-red-400">Cart</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-400">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mr-10 mt-3 flex justify-evenly gap-5">
        <div>
          <Card/>
        </div>
        <div className="md:hidden">
          <Navbar/>
        </div>
      </div>
    </div>
  );
}

export default Header;
