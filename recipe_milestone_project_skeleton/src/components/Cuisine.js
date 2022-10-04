import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Cuisine() {

  const [cuisine, setCuisine] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/cuisine/`)
      const resData = await response.json()
      setCuisine(resData)
    }
    fetchData()
  }, [])

  let cuisineMap = cuisine.map((cuisine) => {

    return (
      <li key={`CusineRouter${cuisine.cuisine_id}`} className="col-sm-6">
        <p>{cuisine.cuisine_name}</p>
        <Link to={`/cuisine/${cuisine.cuisine_id}`} state={{ cuisine_id: cuisine.cuisine_id }}>
          <img src={cuisine.image_url} alt='dog' />
        </Link>
      </li>
    )
  })
  return (
    <div>
      <h1>index page</h1>
      <ul>
        {cuisineMap}
      </ul>

    </div>
  )
}

export default Cuisine