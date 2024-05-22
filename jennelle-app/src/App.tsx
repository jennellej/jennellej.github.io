import Decoration from "./components/Decoration";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App({ children }: { children?: React.ReactNode }) {

  return (
    <div 
      className="h-screen m-0 flex w-full justify-around overflow-y-auto
      bg-jenny_blue text-jenny_white font-merriweather_regular">
      
      <div className="flex flex-col w-full lg:w-1/2">
        <div className="flex-initial z-10">
          <Header />
        </div>

        <div className="flex-auto px-4 z-10 overflow-y-auto">
          {children || <Outlet />}
        </div>
      </div>

      <Decoration num={4} />
    </div>
  );
}

export default App;