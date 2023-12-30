import { useLoaderData } from "react-router-dom";
import { Post } from "../blog/posts";
import BlogPreview from "./BlogPreview";

export default function BlogBrowse() {
    const posts = useLoaderData() as Post[];

    return (
        <div className="flex flex-col gap-y-6">
            <h1 className="text-4xl font-bold text-center">Blog</h1>
            {posts.map((post, i) => <BlogPreview key={i} post={post} index={i} />)}
        </div>
    );
}