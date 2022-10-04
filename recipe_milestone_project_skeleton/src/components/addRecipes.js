import { useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom'

function AddRecipes() {

	const navigate = useNavigate()
	const location = useLocation()
	const { cuisine_id } = location.state

	const [recipe, setRecipe] = useState({
		name: '',
		author: '',
		image_url: '',
		decscription: '',
		directions: '',
		cuisine_id: cuisine_id
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:5000/recipe`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(recipe)
		})
		navigate(`../Cuisine/${cuisine_id}`, { state: { cuisine_id: cuisine_id } })
	}

	return (
		<main>
			<h1>Add a New recipe</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">recipe name</label>
					<input
						required
						value={recipe.name}
						onChange={e => setRecipe({ ...recipe, name: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="founded">desription</label>
					<input
						required
						value={recipe.description}
						onChange={e => setRecipe({ ...recipe, description: e.target.value })}
						className="form-control"
						id="founded"
						name="founded"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="pic">recipe Picture</label>
					<input
						value={recipe.image_url}
						onChange={e => setRecipe({ ...recipe, image_url: e.target.value })}
						className="form-control"
						id="pic"
						name="pic"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="city">author</label>
					<input
						value={recipe.author}
						onChange={e => setRecipe({ ...recipe, author: e.target.value })}
						className="form-control"
						id="city"
						name="city"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="cuisines">directions</label>
					<input
						value={recipe.directions}
						onChange={e => setRecipe({ ...recipe, directions: e.target.value })}
						className="form-control"
						id="cuisines" name="cuisines" required />
				</div>
				<input className="btn btn-primary" type="submit" value="Add recipe" />
			</form>
		</main>
	)
}

export default AddRecipes;