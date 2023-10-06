import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai"; // Importing the Menu icon
import { AiOutlineClose } from "react-icons/ai"; // Importing the Close icon
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const CloseNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="card" onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineMenu size={25} />
      </div>
      <div className={isOpen ? "overlay" : "nonoverlay"}></div>
      <div className={isOpen ? "cartItem" : "cardhide"}>
        <div className="tittle flex justify-between">
          <h2 className="text-2xl font-bold">Ambrosiya</h2>
          <button onClick={CloseNav}>
            <AiOutlineClose className="icon" size={30} />
          </button>
        </div>
        <nav className="mt-10">
          <ul className="flex flex-col space-x-4 justify-center items-center gap-10 text-xl">
            <li className="hover:bg-slate-100 px-10 py-3  hover: text-red-400">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-slate-100 px-10 py-3 text-red-400">
              <Link to="/food">Foods</Link>
            </li>
            <li className="hover:bg-slate-100 px-10 py-3 text-red-400">
              <Link to="/cart">Cart</Link>
            </li>
            <li className="hover:bg-slate-100 px-10 py-3 text-red-400">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
