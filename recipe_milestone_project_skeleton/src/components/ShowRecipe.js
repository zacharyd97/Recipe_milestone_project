import { useEffect, useState } from "react"
import { useLocation, Link } from "react-router-dom"

function ShowRecipe() {

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

        return (
            <li key={`RecipeRouter${ingredient.ingredient_id}`} className="col-sm-6">
                <p>{`${ingredient.amount} ${ingredient.unit} of ${ingredient.ingredient_name}`}</p>
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

    return (
        <div>
            <img src={recipeData.image_url} alt="food"></img>
            <h1>{recipeData.name}</h1>
            <h2>Created by {recipeData.author}</h2>
            <h3>Ingredients</h3>
            <ul>{ingredientMap}</ul>
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