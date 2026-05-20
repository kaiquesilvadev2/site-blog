import { SiteContainer } from "@/components/site-Container";
import { ReactNode } from "react";

interface PostGridCardProps {
    children: ReactNode
}

export default function PostGridCard({
    children
}: PostGridCardProps) {
    return (
        <section>
            <SiteContainer className="px-5 sm:px-4 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {children}
            </SiteContainer>
        </section>
    )
}