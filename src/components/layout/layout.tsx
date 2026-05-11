import React from "react"
import Header from "../header/header"
import { Footer } from "../footer"
import { Inter } from "next/font/google"

type LayoutProps = {
    children: React.ReactNode
}

const inter = Inter({ //Ele define quais caracteres/idiomas serão baixados da fonte.
    subsets: ["latin"],
    variable: "--font-inter",
});

export const Layout = ({ children }: LayoutProps) => {

    return (
        <div className={`${inter} relative flex min-h-screen flex-col bg-(--color-background-secondary)`}>
            <Header />
            <main className="flex-1 flex flex-col ">
                {children}
            </main>
            <Footer />
        </div>
    )
}