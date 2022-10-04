import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

function ShowRecipe() {

    const location = useLocation()
    const { recipe_id } = location.state
    const [recipeData, setRecipeData] = useState({
        name: '',
        author: '',
        image_url: '',
        decscription: '',
        directions: '',
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

    return (
        <div>
            <img src={recipeData.image_url} alt="food"></img>
            <h1>{recipeData.name}</h1>
            <h2>Created by {recipeData.author}</h2>
            <h3>Directions:</h3>
            <p>{recipeData.directions}</p>
            <h3>Description:</h3>
            <p>{recipeData.description}</p>
        </div>
    )
}

export default ShowRecipe