import Image from "next/image"
import Link from "next/link"
import React from "react"

interface LogoSiteProps {
    className?: string
    h?: string
    w?: String
}

export const LogoSite = ({ className = "h-10 w-auto", h = "32", w = "116" }: LogoSiteProps) => {
    return (
        <Link href="/" title="pagina inicial">
            <Image src="/img/logo.svg" height={32} width={116} alt="Logo site" className={className} />
        </Link>
    )
}