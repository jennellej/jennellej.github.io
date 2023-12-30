import blog1 from "./blog1.md";
import blog2 from "./blog2.md";

export interface Post {
    title: string,
    date: Date,
    tags: string[],
    description: string,
    content: string,
};

const posts: Post[] = [
    {
        title: "Hello, world!",
        date: new Date("2023-12-29"),
        description: "This is a test post.",
        tags: ["test", "hello", "world"],
        content: blog1,
    },
    {
        title: "World, hello!",
        date: new Date("2003-06-04"),
        description: "This is another test post.",
        tags: ["test", "hello"],
        content: blog2,
    },
];

// Adjust date to local timezone
posts.forEach(post => {
    post.date.setMinutes(post.date.getMinutes() + post.date.getTimezoneOffset());
});

export default posts;