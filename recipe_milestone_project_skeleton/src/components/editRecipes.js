import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function EditRecipe() {

    const navigate = useNavigate()
    const location = useLocation()
    const { recipe_id } = location.state
    const [recipeData, setRecipeData] = useState({
        recipe_id: '',
        cuisine_id: '',
        name: '',
        author: '',
        image_url: '',
        decscription: '',
        directions: '',
        ingredients: [],
        comments: []
    })

    // const [editData, setEditData] = useState([])

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



    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://localhost:5000/recipe/${recipeData.recipe_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipeData)
        })
        navigate(`../recipe/${recipeData.recipe_id}`, { state: { recipe_id: recipeData.recipe_id } })
    }

    async function handleDelete() {

        await fetch(`http://localhost:5000/recipe/${recipeData.recipe_id}`, {
            method: 'DELETE'
        })
        console.log('Delete Successful')
        navigate(`../cuisine/${recipeData.cuisine_id}`, { state: { cuisine_id: recipeData.cuisine_id } })
    }

    return (
        <main>
            <h1>{`Edit ${recipeData.name} recipe`}</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">recipe name</label>
                    <input
                        required
                        value={recipeData.name}
                        onChange={e => setRecipeData({ ...recipeData, name: e.target.value })}
                        className="form-control"
                        id="name"
                        name="name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="founded">desription</label>
                    <input
                        type="text"
                        required
                        value={recipeData.description}
                        onChange={e => setRecipeData({ ...recipeData, description: e.target.value })}
                        className="form-control"
                        id="founded"
                        name="founded"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pic">recipe Picture</label>
                    <input
                        value={recipeData.image_url}
                        onChange={e => setRecipeData({ ...recipeData, image_url: e.target.value })}
                        className="form-control"
                        id="pic"
                        name="pic"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">author</label>
                    <input
                        value={recipeData.author}
                        onChange={e => setRecipeData({ ...recipeData, author: e.target.value })}
                        className="form-control"
                        id="city"
                        name="city"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cuisines">directions</label>
                    <input
                        value={recipeData.directions}
                        onChange={e => setRecipeData({ ...recipeData, directions: e.target.value })}
                        className="form-control"
                        id="cuisines" name="cuisines" required />
                </div>
                <input className="btn btn-primary" type="submit" value="Edit recipe" />
            </form>
            <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete Recipe</button>
        </main>
    )
}

export default EditRecipe