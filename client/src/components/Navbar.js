import React, {useState, useEffect} from "react";
import logo from "../graphics/3D-Complete.png";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

        return (
            <nav className="nav" id="navbar">
                <div className="nav-content">
                    <img
                        src={logo}
                        className="nav-logo"
                        alt="Logo"
                        onClick={scrollToTop}
                    />
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                onClick={scrollToTop}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Who we are
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
}

export default Navbar