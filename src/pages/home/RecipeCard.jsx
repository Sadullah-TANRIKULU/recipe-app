import meal from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({x}) => {

    const navigate = useNavigate();
    const {label, image, calories} = x.recipe;
    console.log(x);
    console.log(x.recipe.label);


    return ( 
        <div className="recipeCard flex flex-col gap-3 w-40">
            <h2 className="text-center" >{label}</h2>
            <img className="w-20" src={image} alt="appearance of recipe" />
            <button className="btnDetails bg-stone-600 rounded-sm text-white" onClick={() => navigate('/home/details')} >View More</button>
        </div>
     );
}
 
export default RecipeCard;