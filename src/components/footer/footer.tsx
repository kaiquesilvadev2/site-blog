import Image from "next/image"
import Link from "next/link"
import { TextCustom } from "../text"
import { LogoSite } from "../logo/logoSites"
import { SiteContainer } from "../site-Container/site-container"


export const Footer = () => {
    return (
        <footer className="m-auto w-full bg-background">
            <SiteContainer className="px-5 sm:px-4">
                <div className="flex  justify-between min-h-24 box-border py-8 sm:py1 ">
                    <LogoSite />
                    <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
                        <Link href="/"><TextCustom>Termos de uso</TextCustom></Link>
                        <Link href="/"><TextCustom>Politica de Privacidade</TextCustom></Link>
                        <Link href="/"><TextCustom> Enviar feedback</TextCustom></Link>
                    </div>
                </div>
            </SiteContainer>
        </footer>
    )
}