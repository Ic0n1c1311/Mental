import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to open/close the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#ffe5b4] py-4 sticky top-0 z-10">
      <header className="text-center my-4">
        <h1 className="text-[#b90e41] text-4xl mb-2 flex justify-center items-center">
          <img
            src="images/logo.png"
            alt="Logo"
            width="30"
            height="24"
            className="inline-block mr-2 align-text-top mt-0"
          />
          <NavLink to="/" className="hover:text-[#b90e41]">
            Mind Mender
          </NavLink>
        </h1>
      </header>

      {/* Hamburger Icon for Mobile */}
      <div className="flex justify-between items-center px-4 md:hidden">
        <button
          className="text-3xl focus:outline-none"
          onClick={toggleMenu}
        >
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:block text-white py-2`}
        style={{ backgroundColor: '#9400D3' }}
      >
        <ul className="flex flex-col md:flex-row justify-center items-center md:space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'underline border-yellow-500'
                  : 'hover:border-b-2 border-yellow-500'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quiz"
              className={({ isActive }) =>
                isActive
                  ? 'underline border-yellow-400'
                  : 'hover:border-b-2 hover:border-yellow-400'
              }
            >
              Test
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? 'underline border-yellow-500'
                  : 'hover:border-b-2 border-yellow-500'
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/healthProblems"
              className={({ isActive }) =>
                isActive
                  ? 'underline border-yellow-500'
                  : 'hover:border-b-2 border-yellow-500'
              }
            >
              Health Problems
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sessions"
              className={({ isActive }) =>
                isActive
                  ? 'underline border-yellow-500'
                  : 'hover:border-b-2 border-yellow-500'
              }
            >
              Doctors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/videos"
              className={({ isActive }) =>
                isActive
                  ? 'underline border-yellow-400'
                  : 'hover:border-b-2 hover:border-yellow-400'
              }
            >
              Videos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive
                  ? 'underline border-yellow-500'
                  : 'hover:border-b-2 border-yellow-500'
              }
            >
              About Us
            </NavLink>
          </li>

          {/* Sign Up Link - Stays at the End on all Screen Sizes */}
          <li className="md:ml-auto">
            <NavLink
              to="/sign-up"
              className={({ isActive }) =>
                isActive
                  ? 'underline border-yellow-500'
                  : 'hover:border-b-2 border-yellow-500'
              }
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;

