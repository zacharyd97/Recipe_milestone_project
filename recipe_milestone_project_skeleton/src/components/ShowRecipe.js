import { useEffect, useState } from "react"
import { useLocation, Link, useNavigate } from "react-router-dom"

function ShowRecipe() {

    const navigate = useNavigate()
    const location = useLocation()
    const { recipe_id } = location.state
    const [recipeData, setRecipeData] = useState({
        name: '',
        author: '',
        image_url: '',
        decscription: '',
        directions: '',
        ingredients: [],
        comments: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/recipe/${recipe_id}`)
            const resData = await response.json()
            setRecipeData(resData)
        }
        fetchData()
    }, [recipe_id])
    console.log(recipeData)

    let ingredientMap = recipeData.ingredients.map((ingredient) => {

        const handleEditIngredient = () => {
            navigate(`../../ingredient/${ingredient.ingredient_id}`, { state: { ingredient_id: ingredient.ingredient_id } });
        }

        const handleDeleteIngredient = async () => {
            await fetch(`http://localhost:5000/ingredient/${ingredient.ingredient_id}`, {
                method: 'DELETE'
            })
            console.log('Delete Successful')
        }
        return (
            <li key={`RecipeRouter${ingredient.ingredient_id}`} className="col-sm-6">
                <p>{`${ingredient.amount} ${ingredient.unit} of ${ingredient.ingredient_name}`}</p>
                <button className="btn btn-primary" onClick={handleEditIngredient}>Edit Ingredient</button>
                <button className="btn btn-danger" onClick={handleDeleteIngredient}>Delete Ingredient</button>
            </li>
        )
    })

    let commentMap = recipeData.comments.map((comment) => {

        return (
            <li key={`RecipeRouter${comment.comment_id}`} className="col-sm-6">
                <p>{comment.author}</p>
                <p>{comment.comment_text}</p>
                <p>{`Likes: ${comment.likes}`}</p>
            </li>
        )
    })

    const handleAddIngredient = () => {
        navigate(`../../addIngredient/`);
    }

    return (
        <div>
            <img src={recipeData.image_url} alt="food"></img>
            <h1>{recipeData.name}</h1>
            <h2>Created by {recipeData.author}</h2>
            <h3>Ingredients</h3>
            <div>
                <ul>{ingredientMap}</ul>
                <button className="btn btn-primary" onClick={handleAddIngredient}>Add Ingredient</button>
            </div>
            <h3>Directions:</h3>
            <p>{recipeData.directions}</p>
            <h3>Description:</h3>
            <p>{recipeData.description}</p>
            <h3>Comments</h3>
            <ul>{commentMap}</ul>
            <Link to={`/recipe/edit/${recipeData.recipe_id}`} state={{ recipe_id: recipeData.recipe_id }}>Edit Recipe</Link>
        </div>
    )
}

export default ShowRecipe