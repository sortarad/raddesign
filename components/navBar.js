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
    console.log("====>", currentNav)
    return (
        <ul className="flex flex-row">
            {navData.map((item, i) =>
                <li key={i} className="font-VT323-Regular mx-4 text-3xl font-bold cursor-pointer flex flex-row items-center">
                    <div style={currentNav === item.selectedName ? {backgroundColor: "black"} : {}} className="w-4 h-circle border border-black rounded-circle mr-2"></div>
                    <Link href={item.href}>{item.name}</Link>
                </li>
            )}
        </ul>
    )
}