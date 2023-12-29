import BlogPost from "./components/BlogPost";
import Decoration from "./components/Decoration";
import Header from "./components/Header";
import posts from "./blog/posts"

function App() {

  return (
    <div 
      className="h-screen m-0 flex flex-col gap-y-0 overflow-y-auto
      bg-jenny_blue text-jenny_white font-merriweather_regular">
      
      <div className="flex-initial z-10">
        <Header />
      </div>

      <div className="flex-auto px-4 z-10 overflow-y-auto">
        <BlogPost post={posts[0]} />
      </div>

      <Decoration num={4} />
    </div>
  );
}

export default App;