import PostCard from "@/templates/blog/component/post-card/post-card";
import PostGridCard from "@/templates/blog/component/post-grid-card/post-grid-card";

export default function BlogList({ posts }: any) {
    return (
        <PostGridCard>
            {posts.map((post: any) => (
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
    );
}