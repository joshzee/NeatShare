import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { categories } from "../utils/data";

import logoNs from "../assets/logo_ns.png";

const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-gray hover:text-black transition-all duration-200 ease-in-out capitalize";
const isActiveStyle =
  "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize";

const Sidebar = ({ user, closeToggle }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();

    navigate("/login");
  };

  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scroll">
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <img src={logoNs} alt="logo" className="w-full" />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <FaHome className="mb-1" size={20} style={{ fill: "#ff8ca8" }} />
            <span className="font-bold text-lg" style={{ color: "#21a9f7" }}>
              Home
            </span>
          </NavLink>
          <h3 className="mt-0.5 px-5 text-base font-semibold 2xl:text-xl">
            Discover categories
          </h3>
          {categories.slice(0, categories.length).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              onClick={handleCloseSidebar}
              key={category.name}
            >
              <img
                src={category.image}
                className="w-8 h-8 rounded-full shadow-sm"
              />
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="flex flex-col my-5 gap-2 p-2 items-justify bg-white rounded-lg shadow-lg mx-3">
        {user && (
          <Link
            to={`user-profile/${user._id}`}
            className="flex my-5 mb-0 gap-2 p-2 pb-0 items-center bg-white rounded-lg"
            onClick={handleCloseSidebar}
          >
            <img
              src={user.image}
              className="w-10 h-10 rounded-full"
              alt="user-profile"
            />
            <p>{user.userName}</p>
          </Link>
        )}

        <button
          type="button"
          title="Logout"
          className="my-5 gap-2 flex bg-white p-2 pt-0 rounded-full cursor-pointer outline-none shadow-md"
          onClick={logout}
        >
          <AiOutlineLogout color="red" fontSize={30} />
          <p className="mt-1">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
