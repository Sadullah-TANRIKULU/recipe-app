import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/about/About";
import AppRouter from "./router/AppRouter";
// import Home from "./pages/home/Home";

function App() {
  return (
    <div className="app flex flex-col items-center h-screen w-full">
      {/* <Navbar /> */}
      <AppRouter />
      {/* <About /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
