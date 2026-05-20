import { SiteContainer } from "@/components/site-Container"
import PostCard from "@/templates/blog/component/post-card/post-card"
import PostGridCard from "@/templates/blog/component/post-grid-card/post-grid-card"
import BlogHero from "@/templates/blog/sections/blog-hero/blog-hero"


export default function BlogPage() {
    return (
        <div className="mt-20 md:mt-24">
            <BlogHero />
            <PostGridCard>
                <PostCard
                    datePost="12/12/2000"
                    title="Transformando seu negócio em uma loja virtual"
                    description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.Set é a solução perfe"
                    imgPost="/Annette.png"
                    author={{
                        imgUser: "/Annette.png",
                        nameUser: "João kaiquer"
                    }}
                />

                <PostCard
                    datePost="12/12/2000"
                    title="Transformando seu negócio em uma loja virtual"
                    description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.Set é a solução perfe"
                    imgPost="/Annette.png"
                    author={{
                        imgUser: "/Annette.png",
                        nameUser: "João kaiquer"
                    }}
                />
                <PostCard
                    datePost="12/12/2000"
                    title="Transformando seu negócio em uma loja virtual"
                    description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.Set é a solução perfe"
                    imgPost="/Annette.png"
                    author={{
                        imgUser: "/Annette.png",
                        nameUser: "João kaiquer"
                    }}
                />
                <PostCard
                    datePost="12/12/2000"
                    title="Transformando seu negócio em uma loja virtual"
                    description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.Set é a solução perfe"
                    imgPost="/Annette.png"
                    author={{
                        imgUser: "/Annette.png",
                        nameUser: "João kaiquer"
                    }}
                />

            </PostGridCard>
        </div>
    )
}