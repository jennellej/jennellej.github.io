import blog1 from "./blog1.md";
import blog2 from "./blog2.md";

const posts = [
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

export default posts;