import Image from "next/image"
import Link from "next/link"
import { TextCustom } from "../text"
import { LogoSite } from "../logo/logoSites"

export const Footer = () => {
    return (
        <footer className="m-auto w-full border-t-2 border-white/10 bg-[16181D]">
            <div className="max-w-7xl m-auto px-4 sm:px-6">
                <div className="flex  justify-between py-12 ">
                    <LogoSite />
                    <div className="flex flex-col gap-5 sm:flex-row sm:gap-8">
                        <Link href="/"><TextCustom>Termos de uso</TextCustom></Link>
                        <Link href="/"><TextCustom>Politica de Privacidade</TextCustom></Link>
                        <Link href="/"><TextCustom> Enviar feedback</TextCustom></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}