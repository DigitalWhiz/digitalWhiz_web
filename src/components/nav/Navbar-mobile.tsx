import Navbar from "./Navbar";
import { cn } from "@/libs/utils";
import { FC } from "react";


interface MenuMobileProps {
    isOpen: boolean;
    onClose: () => void;
}
const MenuMobile: FC<MenuMobileProps> = ({ isOpen, onClose }) => {
    return (
    <>
        <div
            className={cn(
            "fixed left-0 top-0 w-[80%] sm:w-[40%] h-full z-50 bg-black flex items-center justify-center transition-all duration-300 ease-in-out",
            !isOpen ? "-left-full" : "left-0"
            )}>
            <Navbar />
        </div>
        <div
            onClick={onClose}
            className={cn(
            'fixed left-0 top-0 w-full h-full z-40 bg-black/30',
            !isOpen ? 'hidden' : 'block')}>

        </div>
    </>
    );
};

export default MenuMobile;
