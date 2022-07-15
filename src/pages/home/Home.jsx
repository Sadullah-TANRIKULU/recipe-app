import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import RecipeCard from "./RecipeCard";

const Home = () => {
  const [query, setQuery] = useState("egg");
  const [meal, setMeal] = useState();
  const [recipeInfo, setRecipeInfo] = useState([]);
  const APP_KEY = "b57bed7b28273c86ba4cf5e421359612";
  const APP_ID = "89acd8bb";

  const handleInputData = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = async (e) => {
    e.preventDefault();
    console.log("clicked");
    if (query) {
      try {
        const response = await axios.get(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
        );
        setRecipeInfo(response.data.hits);
        // console.log(response);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please, enter your food");
    }
  };

  useEffect(() => {
    handleSearchClick();
  }, []);

  const handleMealSelect = (e) => {
    setMeal(e.target.value);
  };

  // console.log(meal);
  // console.log(recipeInfo);
  return (
    <div className="home w-full flex flex-col items-center justify-center bg-green-400 ">
      <Navbar />
      <h1>Food App</h1>
      <form
        onSubmit={handleSearchClick}
        action=""
        className="form border-2 border-white p-1 flex gap-3 "
      >
        <input value={query} type="text" onChange={handleInputData} />
        <button type="submit" className="searchBtn">
          Search
        </button>
        <select id="dropdownMenu" onChange={handleMealSelect}>
          <option value={meal}>Breakfast</option>
          <option value={meal}>Lunch</option>
          <option value={meal}>Dinner</option>
          <option value={meal}>Snack</option>
          <option value={meal}>TeaTime</option>
        </select>
      </form>
      <div className="recipeCard grid lg:grid-cols-5 sm:grid-cols-2 bg-green-400 ">
        {recipeInfo.map((x, index) => {
          return <RecipeCard x={x} key={index} />;
        })}
      </div>
      <div className="alertMessage">
      { recipeInfo?.length === 0 && (
        <h1>The Food can not be found</h1> ) }
      </div>
    </div>
  );
};

export default Home;
