import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <>
      <header className="flex items-center justify-between p-2 px-10">
        <div>
          <h1>Authentication</h1>
        </div>
        <nav>
          <ul>
            {!token && (
              <>
                <li>
                  <button>
                    <NavLink to={"/register"}>Sign In/Up</NavLink>
                  </button>
                </li>
              </>
            )}

            {token && (
              <>
                <li>
                  <button>
                    <NavLink to={"/profile"}>Profile</NavLink>
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
