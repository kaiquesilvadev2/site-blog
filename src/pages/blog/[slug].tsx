import { useRouter } from "next/router";
import { getAllPosts } from "@/lib/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import { SiteContainer } from "@/components/site-Container";
import { CallToAction } from "@/templates/landing-page/landing-page/sections";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function PostPage({ post }: any) {
    const router = useRouter();

    return (
        <main className="mt-32">
            <SiteContainer className="px-5 sm:px-4 flex flex-col min-h-[calc(100vh-128px)]">
                <section className="flex-1">

                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild className="text-action-sm text-gray-100">
                                    <Link href="/blog">Blog</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-gray-100" />
                            <BreadcrumbItem>
                                <span className="text-action-sm text-blue-200">{post?.title}</span>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <article>

                    </article>
                </section>
                <CallToAction />
            </SiteContainer>
        </main>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllPosts();

    const paths = posts.map((post: any) => ({
        params: {
            slug: post.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const posts = getAllPosts();

    const post = posts.find(
        (post: any) => post.slug === params?.slug
    );

    return {
        props: {
            post,
        },
    };
};