import Link from "next/link";
import { Button } from "../ui/button";
import ActiveLink from "../active-link";
import { LogoSite } from "../logo/logoSites";
import { SiteContainer } from "../site-Container";

export default function Header() {

    return (
        <header className={`w-full z-50 fixed to-0% backdrop-blur border-b border-white/10 supports-backdrop-filters:bg-background/60 `}>
            <SiteContainer className="px-4 sm:px-2">

                <div className="flex justify-between h-16 items-center">
                    <LogoSite />
                    <nav className=" flex justify-center items-center gap-6">
                        <ActiveLink href="/">Inicio</ActiveLink>
                        <ActiveLink href="/blog">Blog</ActiveLink>
                        <Button className="transition-colors bg-white rounded-full hover:bg-blue-100 text" asChild>
                            <Link href="/comecar" className="fo"> Começar</Link>
                        </Button>
                    </nav>

                </div>

            </SiteContainer>
        </header>
    )
}