import BlogList from "@/templates/blog/sections/blog-list/blog-list";
import { getAllPosts } from "@/lib/posts";
import { GetStaticProps } from "next";

export default function BlogPage({ posts }: any) {
    return <BlogList posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = getAllPosts();

    return {
        props: {
            posts,
        },
    };
};