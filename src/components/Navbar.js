import Link from "next/link"

function Navbar() {
    return (
        <nav>
            <div>
                <Link href="/">Inicio</Link>
                <Link href="/articulos">Artículos</Link>
            </div>
        </nav>
    )
}

export default Navbar