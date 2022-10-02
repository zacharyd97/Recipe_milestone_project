import {useEffect, useState} from "react"


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
    <div className="col-sm-6">
      <p>{cuisine.cuisine_name}</p>
      <img src={cuisine.image_url} alt='dog'/>
    </div>
      )
})
return (
  <div>
    <h1>index page</h1>
    {cuisineMap}
  </div>
)
}

export default Cuisine