
import Navbar from "../../components/Navbar";
import RecipeCard from "./RecipeCard";

const Home = () => {
  return (
    <div className="home w-full ">
      <Navbar />
      <h1>Food App</h1>
      <form action="" className="form border-2 border-white p-1 flex gap-3 " >
        <input type="text" />
        <button type="submit" className="searchBtn">
          Search
        </button>
        <select name="" id="dropdownMenu">
            <option value="">Breakfast</option>
            <option value="">Lunch</option>
            <option value="">Dinner</option>
            <option value="">Snack</option>
            <option value="">TeaTime</option>
        </select>
      </form>
      <RecipeCard />
    </div>
  );
};

export default Home;
