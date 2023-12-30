import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faTag } from "@fortawesome/free-solid-svg-icons";
import { Link, useLoaderData } from "react-router-dom";
import { Post } from "../blog/posts";

export default function BlogBrowse() {
    const posts = useLoaderData() as Post[];

    return (
        <div className="flex flex-col gap-y-6">
            <h1 className="text-4xl font-bold text-center">Blog</h1>
            {posts.map((post, i) => <BlogPost key={i} post={post} index={i} />)}
        </div>
    );
}

function BlogPost( { post, index } : { post : Post, index: number } ) {
    
    return (
        <Link
            to={`/blog/${index}`}
            className="flex flex-col gap-y-1 rounded-md p-3
            hover:bg-opacity-50 hover:bg-jenny_purple
            active:bg-opacity-100 active:bg-jenny_purple
            transition-colors duration-300 ease-in"
        >
            <h2 className="text-2xl">{post.title}</h2>
            <div className="flex flex-row gap-x-2 items-center">
                <FontAwesomeIcon icon={faClock} />
                <h2 className="text-sm">{post.date.toDateString()}</h2>
            </div>         
            <div className="flex flex-row gap-x-2 items-center">
                <FontAwesomeIcon icon={faTag} />
                {post.tags.map((tag, i) => <p key={i} className="text-sm">{tag}</p>)}
            </div>
            <p className="text-lg">{post.description}</p>
        </Link>
    )
}