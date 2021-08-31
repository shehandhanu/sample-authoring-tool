import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link style={{ margin: 10 }} to={"/"}>
        Home
      </Link>
      <Link style={{ margin: 10 }} to={"/aboutus"}>
        About US
      </Link>
      <Link style={{ margin: 10 }} to={"/services"}>
        Services
      </Link>
    </div>
  );
};

export default Header;
