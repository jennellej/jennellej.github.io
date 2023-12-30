import { useLoaderData } from "react-router-dom";
import { Post } from "../blog/posts";
import BlogPreview from "./BlogPreview";

export default function Home() {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-center">Home</h1>
            <p>Welcome to Jennelle's Portfolio!</p>
            <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold">Latest Blog Post</h2>
                <LatestBlogPost />
            </div>
        </div>
    );
}

function LatestBlogPost() {
    const posts = useLoaderData() as Post[];

    if (posts.length === 0)
        return <p>No blog posts</p>;

    // find post with latest date
    let latest_post = posts[0];
    let latest_index = 0;
    posts.forEach((post, i) => {
        if (post.date > latest_post.date) {
            latest_post = post;
            latest_index = i;
        }
    });
    
    return <BlogPreview post={latest_post} index={latest_index} />;
}