import BlogHero from "@/templates/blog/sections/blog-hero/blog-hero";
import BlogList from "@/templates/blog/sections/blog-list/blog-list";
import { getAllPosts } from "@/lib/posts";
import { GetStaticProps } from "next";

export default function BlogPage({ posts }: any) {
    return (
        <div className="mt-20 md:mt-24">
            <BlogHero />
            <BlogList posts={posts} />
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = getAllPosts();

    return {
        props: {
            posts,
        },
    };
};