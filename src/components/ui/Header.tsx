'use client';

import { useState } from "react";
import Container from "./Container";
import Logo from "./logo";
import Navbar from "../nav/Navbar";
import { RiMenu3Line } from "react-icons/ri";
import MenuMobile from '../nav/Navbar-mobile';


const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <header className="fixed left-0 top-0 w-full p-5 z-40">
                <Container className="flex items-center justify-between">
                    <section>
                        <Logo />
                    </section>
                    <section className="hidden lg:block">
                        <Navbar />
                    </section>
                    <section className="lg:hidden">
                        <button 
                            type="button" 
                            onClick={() => setShowMenu(!showMenu)} 
                            className="text-white">
                            <RiMenu3Line size={24}/>
                        </button>
                    </section>
                </Container>
            </header>
            <MenuMobile isOpen={showMenu} onClose={() => setShowMenu(false)} />
        </>
    )
}

export default Header;
