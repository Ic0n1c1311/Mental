import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; 
import { assets } from '../assets/assets'; // Ensure correct import for your assets

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false); // State for profile menu visibility
    const [isOpen, setIsOpen] = useState(false); // State for mobile navigation visibility
    const [token, setToken] = useState(true); // Token state to check if user is logged in

    // Toggle function to open/close the mobile menu
    const toggleMobileMenu = () => {
        setIsOpen(!isOpen);
    };

    // Toggle function for profile dropdown
    const toggleProfileMenu = () => {
        setShowMenu(prevState => !prevState);
    };
    

    return (
        <div className="bg-[#ffe5b4] py-4 sticky top-0 z-10 justify-between">
            {/* Logo */}
            <header className="text-center my-4">
                <h1 className="text-[#b90e41] text-4xl mb-2 flex justify-center items-center">
                    <img
                        src="./images/logo.png" // Adjust this path based on your assets setup
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
                <button className="text-3xl focus:outline-none" onClick={toggleMobileMenu}>
                    <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </button>
            </div>

            {/* Mobile & Desktop Navigation */}
            <nav className={`${isOpen ? 'block' : 'hidden'} md:block text-white py-2`} style={{ backgroundColor: '#9400D3' }}>
                <ul className="flex flex-col md:flex-row justify-center items-center md:space-x-4">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'underline' : ''}>Home</NavLink></li>
                    <hr />
                    <li><NavLink to="/quiz" className={({ isActive }) => isActive ? 'underline' : ''}>Test</NavLink></li>
                    <hr />
                    <li><NavLink to="/blogs" className={({ isActive }) => isActive ? 'underline' : ''}>Blogs</NavLink></li>
                    <hr />
                    <li><NavLink to="/healthProblems" className={({ isActive }) => isActive ? 'underline' : ''}>Health Problems</NavLink></li>
                    <hr />
                    <li><NavLink to="/sessions" className={({ isActive }) => isActive ? 'underline' : ''}>Doctors</NavLink></li>
                    <hr />
                    <li><NavLink to="/videos" className={({ isActive }) => isActive ? 'underline' : ''}>Videos</NavLink></li>
                    <hr />
                    <li><NavLink to="/aboutus" className={({ isActive }) => isActive ? 'underline' : ''}>About Us</NavLink></li>
                    <hr />
                    {/* Conditional Profile Section */}
                    {token ? (
                        <div className='relative flex items-center gap-2 cursor-pointer group' onClick={toggleProfileMenu}>
                            <img className='w-8 rounded-full' src={assets.profile_pic} alt="Profile" />
                            <img className='w-2.5' src={assets.dropdown_icon} alt="Dropdown Icon" />
                            {showMenu && (
                                <div className='absolute top-10 right-0 min-w-[12rem] bg-gray-500 rounded flex flex-col gap-4 p-4 z-10'>
                                    <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                    <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                    <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            )}
                        </div>
                    ) : null}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;






