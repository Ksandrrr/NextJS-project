"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"
type NavLink = {
    label: string;
    href: string;
};
type Props = {
    navLinks: NavLink[];
};
const Navigation = ({navLinks} : Props) => {
const pathname = usePathname()
    return <>
            {navLinks.map((links) => {
                const isActive = pathname === links.href;
                return (
                    <Link
                        key={links.label}
                        href={links.href}
                        className={isActive ? 'active': ""}
                    >
                        {links.label}
                    </Link>
                )
            })}
        </>
        
}
export {Navigation}