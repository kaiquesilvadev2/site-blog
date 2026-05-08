import Link from "next/link";
import { Button } from "../ui/button";
import ActiveLink from "../active-link";

export default function Header() {

    return (
        <header className={`w-full z-50 fixed to-0% backdrop-blur border-b border-white/10 supports-backdrop-filters:bg-background/60 `}>
            <div className="max-w-7xl m-auto px-4 sm:px-4 ls:px-80">

                <div className="flex justify-between h-16 items-center" >
                    <Link href="/" className="text-white">logo</Link>

                    <nav className=" flex justify-center items-center gap-6">
                        <ActiveLink href="/">Inicio</ActiveLink>
                        <ActiveLink href="/blog">Blog</ActiveLink>
                        <Button variant={"secondary"} asChild>
                            <Link href="/comecar"> Começar</Link>
                        </Button>
                    </nav>

                </div>

            </div>
        </header>
    )
}