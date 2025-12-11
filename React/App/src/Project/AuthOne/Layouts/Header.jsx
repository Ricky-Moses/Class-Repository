import React from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("Token") || null;
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
                  <button>Sign In/Up</button>
                </li>
              </>
            )}

            {token && (
              <>
                <li>
                  <button>Profile</button>
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
