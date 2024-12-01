import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";

const themes = {
  light: "light",
  dark: "dark",
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || themes.light;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const handleTheme = () => {
    const { light, dark } = themes;
    const newTheme = theme === light ? dark : light;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="pagePadding bg-base-200">
      <div className="navbar">
        <div className="navbar-start">
          {/* LOGO*/}
          <NavLink
            to="/"
            className="btn btn-primary hidden items-center text-3xl md:flex"
          >
            C
          </NavLink>
          {/* DROPWDOWN*/}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-200 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end">
          {/* THEME SETUP */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            {/* SUN */}
            <BsSunFill className="swap-on h-4 w-4" />
            {/* MOON */}
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          {/* CART */}
          <NavLink to="cart" className="btn btn-circle btn-ghost btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge indicator-item badge-primary badge-sm">
                0
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
