import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/about/About";
import AppRouter from "./router/AppRouter";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Login from "./pages/login/Login";
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
