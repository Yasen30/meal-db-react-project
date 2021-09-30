import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./NavBar.css";

const NavBar = () => {
  const [icon, setIcon] = useState(false);
  const handleClick = () => {
    setIcon(true);
  };
  const handleClose = () => {
    setIcon(false);
  };

  return (
    <section className="bg-green-500 py-4 text-white">
      <nav className="lg:flex justify-between container items-center flex-wrap mx-auto">
        <div className="mobile-flex">
          <Link to="/home">
            <h1 className=" text-4xl">Meal Db</h1>
          </Link>
          {icon === false ? (
            <div className="icons lg:hidden">
              <FaBars onClick={handleClick} />
            </div>
          ) : (
            <div className="icons lg:hidden">
              <AiOutlineCloseCircle onClick={handleClose} />
            </div>
          )}
        </div>

        <div className={icon === true ? "" : "mobile-nav"}>
          <Link className="mx-4 underline nav-item " to="/home">
            Home
          </Link>
          <Link className="mx-4 underline nav-item " to="/about">
            About Me
          </Link>
          <Link className="mx-4 underline nav-item " to="/meals">
            Meals
          </Link>
          <Link className="mx-4 underline nav-item " to="/contact">
            Contact
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
