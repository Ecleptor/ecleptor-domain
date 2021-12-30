import Image from 'next/image'

import logo from '../..//public/branding/Logo_text_white.png'

function Navbar() {
    return (
        <div className="flex justify-between w-full items-center z-50 absolute">

            {/* Logo */}
            <Image src={logo} alt="Rebblr_logo" width={140} height={55} className="flex justify-evenly" />

            {/* Links */}
            <div className="flex space-x-3">
                {/* TODO: replace with NavbarLink component */}
                <a href="/home" className="text-white text-[20px] hover:underline hover:font-bold">Inicio</a>
                <a href="/blog" className="text-white text-[20px] hover:underline hover:font-bold">Blog</a>
                <a href="/team" className="text-white text-[20px] hover:underline hover:font-bold">Equipo</a>
                <a href="/about" className="text-white text-[20px] hover:underline hover:font-bold">Nosotros</a>
            </div>

            {/* Login / Register */}
            <div className="flex space-x-3 mr-2">
                <a href="/login" className="text-white text-[20px] hover:underline hover:font-bold">Iniciar sesión</a>
                <a href="/register" className="text-white text-[20px] hover:underline hover:font-bold">Registrarse</a>
            </div>

        </div>
    )
}

export default Navbar
