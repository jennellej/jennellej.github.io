import { faClock, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export default function BlogPost( { post } : { post : { 
        title: string, 
        date: Date,
        tags: string[],
        content: string,
    } } ) {

    const [postContent, setPostContent] = useState("");
    useEffect(() => {
        fetch(post.content)
            .then(response => response.text())
            .then(text => setPostContent(text));
    });

    // Adjust date to local timezone
    post.date.setMinutes(post.date.getMinutes() + post.date.getTimezoneOffset());
    
    return (
        <div className="flex flex-col gap-y-4">
            <h1 className="text-3xl">{post.title}</h1>
            <div className="flex flex-row gap-x-2 items-center">
                <FontAwesomeIcon icon={faClock} />
                <h2 className="text-lg">{post.date.toDateString()}</h2>
            </div>
            
            <div className="flex flex-row gap-x-2 items-center">
                <FontAwesomeIcon icon={faTag} />
                {post.tags.map((tag, i) => <p key={i} className="text-sm">{tag}</p>)}
            </div>
            <div className="flex flex-col gap-y-2 blog_post">
                <Markdown>{postContent}</Markdown>
            </div>
        </div>
    )
}