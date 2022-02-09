import React, {useState} from 'react';
import './navbar.css';

import {Link} from "react-scroll";

import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import on from '../../assets/on-off-button.png';
import {SidebarData} from '../../SidebarData';

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

  return (
      <>
        <nav className="container">
            <div className="menu">
                    <Link to="" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
            </div>
            <div className="logo">
                <img src={on} alt="" />
            </div>
            <ul>
                <li><a href="#">App</a></li>
                <Link to="Team" >
                    <li><a href="#">Team</a></li>
                </Link>
                <Link to="Learn">
                    <li><a href="#">Learn More</a></li>
                </Link>
                <Link to="Blog">
                    <li><a href="#">Blog</a></li>
                </Link>
                <Link to="Contact">
                    <li><a href="#">Contact</a></li>
                </Link>
            </ul>
        </nav>
        <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
                <Link to="" className="menu-bars">
                    <AiIcons.AiOutlineClose onClick={showSidebar} />
                </Link>
            </li>
            {SidebarData.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
        </div>
    </>
)
}

export default Navbar;
