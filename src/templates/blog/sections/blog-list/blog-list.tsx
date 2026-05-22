import { useRouter } from "next/router";

import BlogHero from "../blog-hero/blog-hero";

import PostCard from "@/templates/blog/component/post-card/post-card";
import PostGridCard from "@/templates/blog/component/post-grid-card/post-grid-card";
import { Inbox } from "lucide-react";
import { SiteContainer } from "@/components/site-Container";
import { CallToAction, CustomerStorySection } from "@/templates/landing-page/landing-page/sections";

export default function BlogList({ posts }: any) {
    const router = useRouter();

    if (!router.isReady) {
        return null;
    }

    const query = (router.query.q as string)?.toLowerCase() || "";


    const filteredPosts = posts.filter((post: any) => {
        return (
            post.title.toLowerCase().includes(query) ||
            post.description.toLowerCase().includes(query)
        );
    });

    const hasPosts = filteredPosts.length > 0;

    return (
        <div className="mt-20 md:mt-24 flex flex-col min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-96px)]">
            <BlogHero />
            {hasPosts ?
                <PostGridCard className="flex-1">
                    {filteredPosts.map((post: any) => (
                        <PostCard
                            key={post.slug}
                            slug={post.slug}
                            datePost={post.date}
                            title={post.title}
                            description={post.description}
                            imgPost={post.image}
                            author={{
                                imgUser: post.author.avatar,
                                nameUser: post.author.name,
                            }}
                        />
                    ))}
                </PostGridCard>
                :
                <SiteContainer className="px-5 sm:px-4 flex-1">
                    <div className="m-auto mt-8 flex flex-col justify-center gap-4 items-center w-auto max-w-md md:w-md border border-dashed border-gray-300/50 rounded-[3px] h-36">
                        <Inbox className="text-gray-100 " />
                        <p className="text-2xl text-gray-100 font-sans"> Nenhum post foi encontrado.</p>
                    </div>
                </SiteContainer>
            }
            <CallToAction />
        </div>
    );
}