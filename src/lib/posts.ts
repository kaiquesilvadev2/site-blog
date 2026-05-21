import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);

    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        frontmatter: data,
        content,
    };
}

export function getAllPosts() {
    const slugs = getPostSlugs();

    const posts = slugs.map((slug) => {
        const { frontmatter } = getPostBySlug(slug);

        return {
            slug: slug.replace(".mdx", ""),

            title: frontmatter.title,
            description: frontmatter.description,
            date: frontmatter.date,
            image: frontmatter.image,

            author: {
                name: frontmatter.author.name,
                avatar: frontmatter.author.avatar,
            },
        };
    });

    return posts;
}