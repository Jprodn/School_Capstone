import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function NavLinkBar(props) {
  const handleLogout = () => {
    this.props.addToken("");
    this.props.deleteUser();
    localStorage.clear();
  };

  let token = window.localStorage.getItem("jwtToken");
  console.log("%c-----NavLinkBar-----", "color: yellow; background-color: black");
  console.log("%cToken", "color: yellow; background-color: black", token);

  

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <>

<nav className="nav">
<Link className="main-list"  to="/home">
        Home{" "}
      </Link>
      <ul className={active}>
      
        {/* <li className="nav__item">
        <Link className="main-list"  to="/itinerary">
        Itinerary{" "}
      </Link>
        </li> */}
        <li className="nav__item">
        <Link className="main-list"  to="/itinerary/create">
        Create{" "}
      </Link>
        </li>
        <li className="nav__item">
        <Link className="main-list" to="/landmark">
        Search{" "}
      </Link>
        </li>

        <li className="nav__item">
        <Link className="main-list" to="/login" onClick={handleLogout}>
        {token !== undefined ? "logout" : "login"}
      </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>

    </>
  );
}
