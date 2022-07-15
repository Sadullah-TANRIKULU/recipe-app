import Navbar from "../../components/Navbar";
import diet from "../../assets/diet.svg";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div className="details w-full ">
      <Navbar />
      <div className="detailsTitle grid grid-cols-3 border-b-4 border-black p-10 ">
        <h1 className="text-6xl col-start-2 ">{state.recipe.label}</h1>
        <img src={diet} alt="diet" className="h-24 col-start-3 " />
      </div>
      <div className="detailsSubDiv grid grid-cols-6 p-10">
        <div className="detailsInfo grid grid-cols-2 col-start-2 text-lg font-semibold m-1 gap-x-1 ">
          <p>
            {state.recipe.totalNutrients.CA.label} :{" "}
            {Math.round(state.recipe.totalNutrients.CA.quantity)}
            {state.recipe.totalNutrients.CA.unit}
          </p>
          <p>
            {state.recipe.totalNutrients.CHOCDF.label} :{" "}
            {Math.round(state.recipe.totalNutrients.CHOCDF.quantity)}
            {state.recipe.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {state.recipe.totalNutrients.CHOLE.label} :{" "}
            {Math.round(state.recipe.totalNutrients.CHOLE.quantity)}
            {state.recipe.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {state.recipe.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(state.recipe.totalNutrients.ENERC_KCAL.quantity)}
            {state.recipe.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>
            <span>Total Weight : </span>
            {Math.round(state.recipe.totalWeight)}
          </p>
          <p>Calories: {Math.round(state.recipe.calories)}</p>
          {state.recipe.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
        </div>
        <div className="detailsImg grid-cols-2 col-span-2 m-2 ">
          <img src={state.recipe.image} alt={state.recipe.label} className=" h-96" />
        </div>
        <div className="recipeDetails grid grid-cols-2 text-md font-semibold gap-x-1 ">
          {state.recipe.ingredientLines.map((line, index) => (
            <div key={index}>
              <p>
                {index + 1} - {line}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
