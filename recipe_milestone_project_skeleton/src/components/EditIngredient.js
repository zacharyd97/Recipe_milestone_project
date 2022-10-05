import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function EditIngredient() {

    const navigate = useNavigate()
    const location = useLocation()
    const { ingredient_id } = location.state
    const [ingredientData, setIngredientData] = useState({
        recipe_id: '',
        amount: '',
        unit: '',
        ingredient_name: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://localhost:5000/ingredient/${ingredient_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ingredientData)
        })
        navigate(`../recipe/${ingredientData.recipe_id}`, { state: { recipe_id: ingredientData.recipe_id } })
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/ingredient/${ingredient_id}`)
            const resData = await response.json()
            setIngredientData(resData)
        }
        fetchData()
    }, [ingredient_id])
    console.log(ingredientData)

    return (
        <main>
            <h1>Edit Ingredient</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">amount</label>
                    <input
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
                <input className="btn btn-primary" type="submit" value='Edit ingredient' />
            </form>
        </main>
    )
}

export default EditIngredient