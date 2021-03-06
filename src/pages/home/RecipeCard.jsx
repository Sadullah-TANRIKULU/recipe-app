import { useNavigate } from "react-router-dom";

const RecipeCard = ({x}) => {

    const navigate = useNavigate();
    const {label, image} = x.recipe;
    // console.log(x);


    return ( 
        <div className="recipeCard flex flex-col gap-7 w-11/12 m-4  ">
            <h2 className="text-center" >{label}</h2>
            <img className="w-full" src={image} alt="appearance of recipe" />
            <button className="btnDetails bg-stone-600 rounded-sm text-white" onClick={() => navigate('/home/details', {state: x, replace: false})} >View More</button>
        </div>
     );
}
 
export default RecipeCard;