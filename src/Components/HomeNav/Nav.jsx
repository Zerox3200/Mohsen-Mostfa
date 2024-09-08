import React, { useEffect, useState } from 'react';
import './Nav.scss';
import { RiCloseCircleLine } from "react-icons/ri";
import { GrHomeRounded } from "react-icons/gr";
import { MdDescription, MdMiscellaneousServices } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import logo from '../../Images/3d-illustration-young-business-man-with-funny-expression-his-face.jpg';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { GrProjects } from "react-icons/gr";
import { throttle } from 'lodash'; // Import throttle

export default function Nav() {
    const [collapsed, setCollapsed] = useState(true);
    const [hide, setHide] = useState(false);
    const [activeSection, setActiveSection] = useState('Intro'); // Single state for active section

    // Toggle sidebar visibility
    const handleHide = () => {
        setHide(!hide);
    };

    // Toggle sidebar collapsed state
    const handleIcon = () => {
        setCollapsed(!collapsed);
    };

    // Scroll to a specific section
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Scroll handler with section activation logic
    const handleScroll = throttle(() => {
        const scrollPosition = window.pageYOffset;

        if (scrollPosition <= 850) {
            setActiveSection('Intro');
        } else if (scrollPosition > 850 && scrollPosition <= 1600) {
            setActiveSection('About');
        } else if (scrollPosition > 1600 && scrollPosition <= 2700) {
            setActiveSection('Skills');
        } else if (scrollPosition > 2700 && scrollPosition <= 5229) {
            setActiveSection('Resume');
        } else if (scrollPosition > 5229 && scrollPosition <= 5600) {
            setActiveSection('Service');
        } else if (scrollPosition > 5600) {
            setActiveSection('Projects');
        }
    }, 200); // Throttle scroll event handler

    // Set up scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array to add listener once

    return (
        <>
            <div className={hide ? "dropback apper-dropback" : "dropback"} onClick={handleHide}></div>
            <aside className={hide ? 'allnav' : 'allnav apper'}>
                <Sidebar collapsed={collapsed}>
                    <Menu className={collapsed ? 'collapsed main-side overflow-y-auto h-100' : 'main-side p-1 overflow-y-auto h-100'}>
                        <MenuItem
                            className="mb-5 rounded-pill fs-1 mt-4 CloseIcon cursor-pointer"
                            onClick={handleIcon}
                            icon={collapsed ? <FaBars /> : <RiCloseCircleLine />}
                            component={<span className='Remove_hover'></span>}
                        ></MenuItem>

                        <span className='d-flex align-items-center justify-content-center my-5'>
                            <img src={logo} loading='lazy' alt="Logo" className={collapsed ? 'Logo-colaps' : 'Logo'} />
                        </span>

                        <div className="flex justify-between flex-col">
                            <div className="ps">
                                <MenuItem
                                    onClick={() => { handleHide(); scrollToSection('Intro'); }}
                                    className={activeSection === 'Intro' ? 'menu-items Active' : 'menu-items'}
                                    icon={<GrHomeRounded className={activeSection === 'Intro' ? 'icon Active' : 'icon'} />}
                                >
                                    Home
                                </MenuItem>

                                <MenuItem
                                    onClick={() => { handleHide(); scrollToSection('About'); }}
                                    className={activeSection === 'About' ? 'menu-items Active' : 'menu-items'}
                                    icon={<MdDescription className={activeSection === 'About' ? 'icon Active' : 'icon'} />}
                                >
                                    About
                                </MenuItem>

                                <MenuItem
                                    onClick={() => { handleHide(); scrollToSection('Skills'); }}
                                    className={activeSection === 'Skills' ? 'menu-items Active' : 'menu-items'}
                                    icon={<GiSkills className={activeSection === 'Skills' ? 'icon Active' : 'icon'} />}
                                >
                                    Skills
                                </MenuItem>

                                <MenuItem
                                    onClick={() => { handleHide(); scrollToSection('Resume'); }}
                                    className={activeSection === 'Resume' ? 'menu-items Active' : 'menu-items'}
                                    icon={<BiSolidUserDetail className={activeSection === 'Resume' ? 'icon Active' : 'icon'} />}
                                >
                                    Resume
                                </MenuItem>

                                <MenuItem
                                    onClick={() => { handleHide(); scrollToSection('Service'); }}
                                    className={activeSection === 'Service' ? 'menu-items Active' : 'menu-items'}
                                    icon={<MdMiscellaneousServices className={activeSection === 'Service' ? 'icon Active' : 'icon'} />}
                                >
                                    Services
                                </MenuItem>

                                <MenuItem
                                    onClick={() => { handleHide(); scrollToSection('Projects'); }}
                                    className={activeSection === 'Projects' ? 'menu-items Active' : 'menu-items'}
                                    icon={<GrProjects className={activeSection === 'Projects' ? 'icon Active' : 'icon'} />}
                                >
                                    Projects
                                </MenuItem>
                            </div>
                        </div>
                    </Menu>
                </Sidebar>
            </aside>

            <span className='bars' onClick={handleHide}>
                {hide ? <RiCloseCircleLine /> : <FaBars />}
            </span>
        </>
    );
}
