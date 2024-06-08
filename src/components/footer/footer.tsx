import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-pink-500 to-purple-300 text-white py-12 mt-20 sm:mt-56">
      <div className="container mx-auto text-center px-4">
        <p className="text-lg mb-6">
          Destaca tu negocio en el mundo digital con nosotros.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.instagram.com/agencia_digitalwhiz/"
            className="text-xl hover:text-gray-200 transition-colors duration-300">
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-xl hover:text-gray-200 transition-colors duration-300">
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-xl hover:text-gray-200 transition-colors duration-300">
            <FaTwitter />
          </a>
        </div>
        <p className="text-sm mb-4">
          © 2024 Digital Whiz. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
