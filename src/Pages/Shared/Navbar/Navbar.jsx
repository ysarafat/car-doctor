import React, { useContext, useState } from 'react';
import { BsHandbag, BsSearch } from 'react-icons/bs';
import { HiMenuAlt1, HiX } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { AuthContext } from '../../../context/AuthProvider';

function Navbar() {
    const { logoutUser, user } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? 'text-primary' : 'text-dark hover:text-light-dark'
                }
            >
                <li>Home</li>
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) =>
                    isActive ? 'text-primary' : 'text-dark hover:text-light-dark'
                }
            >
                <li>About</li>
            </NavLink>
            <NavLink
                to="/service"
                className={({ isActive }) =>
                    isActive ? 'text-primary' : 'text-dark hover:text-light-dark'
                }
            >
                <li>Service</li>
            </NavLink>
            <NavLink
                to="/blog"
                className={({ isActive }) =>
                    isActive ? 'text-primary' : 'text-dark hover:text-light-dark'
                }
            >
                <li>Blog</li>
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) =>
                    isActive ? 'text-primary' : 'text-dark hover:text-light-dark'
                }
            >
                <li>Contact</li>
            </NavLink>
            {!user && (
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        isActive ? 'text-primary' : 'text-dark hover:text-light-dark'
                    }
                >
                    <li>Sign In</li>
                </NavLink>
            )}
            {user && (
                <>
                    <NavLink
                        to="/booked-service"
                        className={({ isActive }) =>
                            isActive ? 'text-primary' : 'text-dark hover:text-light-dark'
                        }
                    >
                        <li>Bookings</li>
                    </NavLink>
                    <NavLink
                        onClick={logoutUser}
                        className={({ isActive }) =>
                            isActive ? '' : 'text-dark hover:text-light-dark'
                        }
                    >
                        <li>Sign Out</li>
                    </NavLink>
                </>
            )}
        </>
    );

    return (
        <nav className="container mx-auto px-4 mt-4 flex justify-between items-center">
            <div className="">
                <Link to="/">
                    <img className="w-[72px] h-[58px] lg:h-full lg:w-full" src={logo} alt="logo" />
                </Link>
            </div>
            <div>
                <ul className="hidden lg:flex items-center gap-10 text-lg font-semibold ">
                    {navLinks}
                </ul>
            </div>
            <div className="hidden lg:flex items-center  gap-6">
                <div className="flex items-center gap-5 ">
                    <BsHandbag size={25} />
                    <BsSearch size={25} />
                </div>
                <Link to="/">
                    <button className="border-2 hidden lg:block border-primary py-4 px-6 rounded-lg text-lg font-semibold hover:bg-primary duration-300 hover:text-white">
                        Appointment
                    </button>
                </Link>
            </div>
            <div className="lg:hidden flex gap-5">
                <div className="flex items-center gap-5 ">
                    <BsHandbag size={25} />
                    <BsSearch size={25} />
                </div>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen ? <HiMenuAlt1 size={30} /> : <HiX size={30} />}
                </button>
                {isOpen && (
                    <ul className="absolute duration-300 delay-500	top-24 left-0 right-0 w-full px-5 py-5 z-10 bg-slate-100 flex flex-col gap-4">
                        {navLinks}
                        <Link to="/">
                            <button className="border-2 w-full border-primary  py-2 px-6 rounded-lg text-lg font-semibold bg-primary duration-300 text-white hover:bg-white hover:text-deep-dark">
                                Appointment
                            </button>
                        </Link>
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
