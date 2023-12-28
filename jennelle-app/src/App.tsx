import Header from "./components/Header";

function App() {
  return (
    <div 
      className={`p-3 px-4 h-screen flex flex-col gap-y-2
      bg-jenny_blue text-jenny_white`}>
      
      <div className="flex-initial">
        <Header />
      </div>

      <div className="flex-auto">
        <p className="text-2xl">Hello, world!</p>
      </div>
    </div>
  );
}

export default App;