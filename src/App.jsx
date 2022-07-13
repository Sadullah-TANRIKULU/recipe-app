import "./App.css";
import AppRouter from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app flex flex-col items-center h-screen w-full">
      <BrowserRouter>
      <AppRouter />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
