import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { AUTH_ROUTES } from "@/routes/routes";
import Logo from "../ui/logo";

export async function Navbar() {
  const session = await getServerSession();

  return (
    <nav className="bg-[#070A60] p-4">
      <div className="container mx-auto flex justify-between">
        <div>
          <Logo />
        </div>

        <ul className="flex flex-col lg:flex-row items-center gap-4">
          <li>
            <Link
              href="/"
              className="py-2 px-4 border-b-2 text-gray-400 border-primary transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="py-2 px-4 border-b-2 text-gray-400 border-transparent hover:border-primary transition-colors duration-300">
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#nosotros"
              className="py-2 px-4 border-b-2 text-gray-400 border-transparent hover:border-primary transition-colors duration-300">
              About us
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="py-2 px-4 border-b-2 text-gray-400 border-transparent hover:border-primary transition-colors duration-300">
              Contact
            </Link>
          </li>

          {session?.user ? (
            <>
              <div>
                <p>Hola {session?.user?.name} !!</p>
                <Image
                  src={session?.user?.image as string}
                  alt="Imagen de perfil"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <button 
                onClick={async () => await signOut({
                  callbackUrl: AUTH_ROUTES.HOME,
                })}>
                Sign Out
              </button>  
              </div>
              <li className="px-3 py-1">
                <Link href="/dashboard/profile">Profile</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  href="/login"
                  className="py-2 px-4 bg-primary text-white rounded-lg border-2 border-transparent hover:bg-transparent hover:border-red-200 hover:text-primary transition-colors duration-300">
                  Login
                </Link>
              </li>
              <li className="py-2 px-4 bg-primary text-white rounded-lg border-2 border-transparent hover:bg-transparent hover:border-red-200 hover:text-primary transition-colors duration-300">
                <Link href="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
