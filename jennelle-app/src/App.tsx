import Decoration from "./components/Decoration";
import Header from "./components/Header";

function App() {
  return (
    <div 
      className={`h-screen m-0 flex flex-col gap-y-2
      bg-jenny_blue text-jenny_white font-merriweather_regular`}>
      
      <div className="flex-initial z-10">
        <Header />
      </div>

      <div className="flex-auto px-4 z-10">
        <p className="text-2xl">Hello, world!</p>
        <p className="text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, mollitia ex accusantium illo magni asperiores suscipit ipsum aperiam ullam in, quo autem quos. Incidunt error debitis rerum blanditiis tenetur laborum!</p>
      </div>

      <Decoration num={4} />
    </div>
  );
}

export default App;