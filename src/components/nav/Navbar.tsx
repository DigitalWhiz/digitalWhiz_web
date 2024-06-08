"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { AUTH_ROUTES } from "@/routes/routes";
import { Avatar } from "@nextui-org/react";
import Logo from "../ui/logo";
import MenuMobile from "./Navbar-mobile";

export default function NavbarClient() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  return (
    <nav className="bg-[#070A60] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />

        <button className="lg:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        <ul className="hidden lg:flex items-center gap-4">
          <li>
            <Link
              href="/"
              className="py-2 px-4 text-gray-400 border-b-2 border-primary transition-colors duration-300 hover:text-white hover:border-accent"
              >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/sobreNosotros"
              className="py-2 px-4 border-b-2 text-gray-400 border-transparent transition-colors duration-300 hover:text-white hover:border-accent">
              Nuestros Servicios
            </Link>
          </li>
          <li>
            <Link
              href="/contacto"
              className="py-2 px-4 border-b-2 text-gray-400 border-transparent transition-colors duration-300 hover:text-white hover:border-accent">
              Contactanos
            </Link>
          </li>
          <li>
            <Link
              href="/sobreNosotros"
              className="py-2 px-4 border-b-2 text-gray-400 border-transparent transition-colors duration-300 hover:text-white hover:border-accent">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link
              href="/Preguntas"
              className="py-2 px-4 border-b-2 text-gray-400 border-transparent transition-colors duration-300 hover:text-white hover:border-accent">
              Preguntas Frecuentes
            </Link>
          </li>

          {session?.user ? (
            <>
              <div className="relative">
              <button onClick={toggleUserMenu} className="flex items-center gap-2">
                {session.user.image ? (
                  <Avatar 
                  src={session.user.image} 
                  alt="Imagen de perfil"
                  size="md"
                  color="danger"
                  isBordered />
                ) : (
                  <Avatar name={session.user.name ?? "Usuario"}
                  alt="Imagen de perfil"
                  size="md"
                  color="danger"
                  isBordered />
                )}
              </button>
              {userMenuOpen && (
                <ul className="absolute right-0 mt-2 w-48 bg-slate-700 bg-opacity-90 border border-gray-700 rounded-lg shadow-lg z-50">
                  <li className="px-4 py-2 hover:bg-gray-700 rounded-lg">
                    <Link href="/" className="text-white">Página principal</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700 rounded-lg">
                    <Link href="/dashboard" className="text-white">Panel de control</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700 rounded-lg">
                    <Link href="/dashboard/profile" className="text-white">Perfil</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700 rounded-lg">
                    <Link href="/tickets" className="text-white">Tickets</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700 rounded-lg">
                    <button
                      onClick={async () => await signOut({ callbackUrl: AUTH_ROUTES.HOME })}
                      className="w-full text-left text-red-500"
                    >
                      Cerrar Sesión
                    </button>
                  </li>
                </ul>
              )}
            </div>
            </>
          ) : (
            <>
              <li>
                <Link
                  href="/login"
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none mt-4 rounded bg-gradient-to-r from-[#F64994] to-[#FC78F4]">
                  Iniciar Sesión
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none mt-4 rounded bg-gradient-to-r from-[#F64994] to-[#FC78F4]">
                  Registrarse
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      {menuOpen && <MenuMobile isOpen={menuOpen} onClose={toggleMenu} />}
    </nav>
  );
}

