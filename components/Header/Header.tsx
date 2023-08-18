import Link from "next/link"
import Style from "./Header.module.css"
import { Navigation } from "../Navigation"
const navItems = [
    { label: "Home", href: "/" },
    { label: "Movies", href: "/movies" },
]
const Header = () => {
    return (
        <header className={Style.Header}>
            <Navigation navLinks={navItems}/>
        </header>
        )
}
export {Header}