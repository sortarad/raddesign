import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const navData = [
    {
        name: "YOUNG LAB",
        selectedName: 'youngLab',
        href: "/",
    },
    {
        name: "INFO",
        selectedName: 'info',
        href: "/info",
    },
    {
        name: "CONTACT",
        selectedName: 'contact',
        href: "contact",
    },
];

export default function NavBar({ currentNav }) {
    const [menuStyle, setMeunStyle] = useState("responsive-navBar");
    const [menuOpened, setMenuOpened] = useState(false);

    const toggleNavbar = () => {
        setMeunStyle(menuStyle === "responsive-navBar" ? "responsive-navBar-opened" : "responsive-navBar");
        setMenuOpened(!menuOpened);
    }

    return (
        <ul className="flex flex-col md:flex-row">
            <li 
            onClick={()=>toggleNavbar()}
            className="font-VT323-Regular mx-4 text-xl md:text-3xl font-bold cursor-pointer items-center toggle-menu-button">
                <div style={menuOpened === true ? {} : { backgroundColor: "black" }} className="w-4 h-circle border border-black rounded-circle mr-2"></div>
                MENU
            </li>
            {navData.map((item, i) =>
                <li key={i} className={menuStyle}>
                    <div style={currentNav === item.selectedName ? { backgroundColor: "black" } : {}} className="w-4 h-circle border border-black rounded-circle mr-2"></div>
                    <Link href={item.href}>{item.name}</Link>
                </li>
            )}
        </ul>
    )
}