import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function AddIngredient() {

    const navigate = useNavigate()
    const location = useLocation()
    const { recipe_id } = location.state
    const [ingredientData, setIngredientData] = useState({
        recipe_id: recipe_id,
        amount: '',
        unit: '',
        ingredient_name: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://localhost:5000/ingredient`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ingredientData)
        })
        navigate(`../recipe/${recipe_id}`, { state: { recipe_id: ingredientData.recipe_id } })
    }

    return (
        <main>
            <h1>Add a New recipe</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">amount</label>
                    <input
                        type="number"
                        required
                        value={ingredientData.amount}
                        onChange={e => setIngredientData({ ...ingredientData, amount: e.target.value })}
                        className="form-control"
                        id="name"
                        name="name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="founded">unit</label>
                    <input
                        required
                        value={ingredientData.unit}
                        onChange={e => setIngredientData({ ...ingredientData, unit: e.target.value })}
                        className="form-control"
                        id="founded"
                        name="founded"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pic">name</label>
                    <input
                        value={ingredientData.ingredient_name}
                        onChange={e => setIngredientData({ ...ingredientData, ingredient_name: e.target.value })}
                        className="form-control"
                        id="pic"
                        name="pic"
                    />
                </div>
                <input className="btn btn-primary" type="submit" value='Add ingredient' />
            </form>
        </main>
    )
}

export default AddIngredient