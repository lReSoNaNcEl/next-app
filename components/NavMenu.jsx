import Link from 'next/link'

const NavMenu = () => {
    return (
        <nav className="navmenu">
            <Link href="/"><a className="navmenu__link">Home</a></Link>
            <Link href="/profile"><a className="navmenu__link">Profile</a></Link>
            <Link href="/about"><a className="navmenu__link">About</a></Link>
            <style jsx>
            {
                `
                .navmenu__item {
                    color: green;
                }
                `
            }
            </style>
        </nav>
    )
}

export default NavMenu