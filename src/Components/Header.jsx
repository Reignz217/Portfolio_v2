import { useState } from "react";
import {AlignJustify, ChevronLast} from 'lucide-react'

export default function Header() {
    const [menu, setMenu] = useState("home");
    const [nav, setNav] = useState(false);

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    

    return (
        <div className="text-[#00ADB5] flex justify-between items-center p-5 sticky top-0 bg-[#222831] border-b z-50">
            <h4 className="font-bold lg:text-6xl md:text-4xl text-2xl">RH</h4>
            <AlignJustify onClick={()=>setNav(!nav)} className={`md:hidden ${nav ? 'hidden' : 'block'}`}/>
            <ChevronLast onClick={()=>setNav(!nav)} className={`${nav ? 'block' : 'hidden'}`}/>
            <ul className={
                `fixed top-[73px] right-0 w-[70%] h-screen bg-[#222831]/95 pt-10 flex flex-col items-center gap-10 px-6
                transform transition-transform duration-500 z-40
                ${nav ? 'translate-x-0' : 'translate-x-full'}
                md:relative md:top-0 md:flex md:flex-row md:w-fit md:h-auto md:bg-transparent md:translate-x-0 md:px-0 md:pt-0
                lg:gap-20 gap-10 font-medium lg:text-2xl text-lg
                `}>
                {navItems.map((item) => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            onClick={() => {
                                setMenu(item.id);
                                //setNav(false); // closes the mobile menu (Optional)
                            }}

                            className={`transition-all duration-500 cursor-pointer nav ${menu === item.id ? "underline" : ""}`}
                            aria-current={menu === item.id ? "page" : undefined}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
