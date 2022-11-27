import React from "react";
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

  if (!token) {
    return null
  }
  
  return (
    <>
      <Link className="main-list" to="/home">
        Home{" "}
      </Link>
      <Link className="main-list" to="/itinerary">
        Itinerary{" "}
      </Link>
      <Link className="main-list" to="/itinerary/create">
        Create{" "}
      </Link>
      <Link className="main-list" to="/landmark">
        Search{" "}
      </Link>

      <Link className="main-list" to="/login" onClick={handleLogout}>
        {token !== undefined ? "logout" : "login"}
      </Link>
    </>
  );
}
