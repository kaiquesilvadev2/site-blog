import { useRouter } from "next/router";
import { getAllPosts } from "@/lib/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import { SiteContainer } from "@/components/site-Container";
import { CallToAction } from "@/templates/landing-page/landing-page/sections";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Avatar } from "@/components/avatar";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";

export default function PostPage({ post }: any) {
    const router = useRouter();
    const publishedDate = new Date(post?.date).toLocaleDateString('pt-BR');

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

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
                        <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border">

                            <figure className="relative aspect-16/10 w-full overflow-hidden rounded-lg">
                                <Image
                                    src={post?.image ?? ''}
                                    alt={post?.title ?? ''}
                                    fill
                                    className="object-cover"
                                />
                            </figure>

                            <div className="p-4 md:p-6 lg:p-12 pb-0">

                                <h1 className="mb-6 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl text-gray-100">
                                    {post?.title}
                                </h1>

                                <Avatar.Container>
                                    <Avatar.Image src={post?.author.avatar} alt={post?.title} />
                                    <Avatar.Content>
                                        <Avatar.Title>{post?.author.name}</Avatar.Title>
                                        <Avatar.Description>
                                            Publicado em {''}
                                            <time dateTime={post.date}>{publishedDate}</time>
                                        </Avatar.Description>
                                    </Avatar.Content>
                                </Avatar.Container>

                                <article className="prose prose-invert prose-h1:hidden max-w-none px-4 mt-12 md:px-6 lg:px-12 text-gray-200">
                                    <MDXRemote {...post.mdxSource} />
                                </article>

                            </div>
                        </article>
                    </div>
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

import { serialize } from "next-mdx-remote/serialize";
import { getPostBySlug } from "@/lib/posts";

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = getPostBySlug(params?.slug as string);

    const mdxSource = await serialize(post.content);

    return {
        props: {
            post: {
                ...post.frontmatter,
                slug: post.slug,
                mdxSource,
            },
        },
    };
};