import Header from "./components/Header";

function App() {
  return (
    <div 
      className={`h-screen m-0 flex flex-col gap-y-2
      bg-jenny_blue text-jenny_white font-merriweather_regular`}>
      
      <div className="flex-initial">
        <Header />
      </div>

      <div className="flex-auto px-4">
        <p className="text-2xl">Hello, world!</p>
      </div>
    </div>
  );
}

export default App;