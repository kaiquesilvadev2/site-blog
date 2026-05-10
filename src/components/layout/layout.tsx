import React from "react"
import Header from "../header/header"
import { Footer } from "../footer"

type LayoutProps = {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 flex flex-col ">
                {children}
            </main>
            <Footer />
        </div>
    )
}