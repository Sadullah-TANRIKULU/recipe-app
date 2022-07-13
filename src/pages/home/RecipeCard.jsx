import meal from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";

const RecipeCard = () => {

    const navigate = useNavigate();

    return ( 
        <div className="recipeCard flex flex-col gap-3 ">
            <h2>Recipe Name</h2>
            <img className="w-20" src={meal} alt="appearance of recipe" />
            <button className="btnDetails bg-stone-600 rounded-sm text-white" onClick={() => navigate('/home/details')} >View More</button>
        </div>
     );
}
 
export default RecipeCard;