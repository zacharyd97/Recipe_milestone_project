import { useEffect, useState } from "react"
import { useLocation, Link } from 'react-router-dom'


function ShowCuisine() {

    const location = useLocation()
    const { cuisine_id } = location.state
    const [data, setData] = useState({ recipes: [] })


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/cuisine/${cuisine_id}`)
            const resData = await response.json()
            setData(resData)
        }
        fetchData()
    }, [cuisine_id])

    let recipes = data.recipes
    let recipeMap = recipes.map((recipe) => {

        return (
            <li key={`RecipeRouter${recipe.recipe_id}`} className="col-sm-6">
                <p>{recipe.name}</p>
                <Link to={`/recipe/${recipe.recipe_id}`} state={{ recipe_id: recipe.recipe_id }}>
                    <img src={recipe.image_url} alt='dog' />
                </Link>
            </li>
        )
    })

    return (
        <div>
            <h1>{data.cuisine_name}</h1>
            <ul>
                {recipeMap}
            </ul>
            <Link to={'/addRecipes'} state={{ cuisine_id: cuisine_id }} className="btn btn-primary" >Add Recipe</Link>
        </div>
    )
}

export default ShowCuisine