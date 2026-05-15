import React from "react"
import { Inter, PT_Sans_Caption } from "next/font/google"
import { Footer } from "./footer";
import Header from "./header/header";

type LayoutProps = {
    children: React.ReactNode
}

const ptSansCaption = PT_Sans_Caption({ //Ele define quais caracteres/idiomas serão baixados da fonte.
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ['700']
});

const inter = Inter({ //Ele define quais caracteres/idiomas serão baixados da fonte.
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ['400', '500']
});

export const Layout = ({ children }: LayoutProps) => {

    return (
        <div className={`${inter.className} ${ptSansCaption.className} font-inter relative flex min-h-screen flex-col bg-(--color-background-secondary)`}>
            <Header />
            <main className="flex-1 flex flex-col ">
                {children}
            </main>
            <Footer />
        </div>
    )
}