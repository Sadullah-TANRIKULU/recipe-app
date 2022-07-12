import "./App.css";
import Header from "./components/header/Header";
import About from "./pages/about/About";
// import Home from "./pages/home/Home";

function App() {
  return (
    <div className="app flex flex-col items-center h-screen w-full">
      <Header />
      <About />
      {/* <Home /> */}
    </div>
  );
}

export default App;
