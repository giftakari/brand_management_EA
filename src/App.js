import "./App.css"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

/** Requirements
 *
 * 1 Fetch the data from the API endpoint
 * 2 render the data
 * 3 Top Brand
 * 4 All Brand Management
 * 5 Display all festival attended if any
 * 6 Sort the  render by alphabetical order
 */

/** STEPS
 *  1 Fetch the data from the endpoint
 * 2 render the list on the Frontend
 * 3 Sort the data in alphabetical order
 * @returns
 */

// Optionally created a server due to Cors fron original server
// http://localhost:3004/brands
// in place of https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals

function App() {
  // Placeholder data to render on the screen
  const [loading, setLoading] = useState(true)

  // Initial values rendered on the screen before the data is received
  // from the backend
  const [brands, setBrands] = useState([])

  // Set 1 (Fetch the data )
  useEffect(() => {
    fetch("http://localhost:3004/brands").then((response) =>
      response.json().then((data) => {
        setBrands(data)
        setLoading(false)
      })
      .catch(err => console.log(err))
    )
  }, [])

  // if data is not ready, display a Loadding

  if(loading){
    return <h2>Loading ...</h2>
  }

  // console.log(sortedBrand)
  return (
    <div > 
      <h1>Brand Management</h1>
      {/** When the data is ready loop through it and display */}
      {brands &&
        brands.sort().map((brand, index) => {
          return (
            <div key={index} style={{border:"3px solid gold", margin:"1rem"}}>
              <h3>{brand.name}</h3>
             {brand.bands.map((singleBrand, key )=> <ul key={key}>
              <li>{singleBrand.recordLabel}</li>
              <li>{singleBrand.name}</li> 
             </ul>)}
            </div>
          )
        })}
    </div>
  )
}

export default App
