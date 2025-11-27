import React from "react"
import { DisplayRecipes } from "./RTK_Query/recipesService"
import "./App.css"
import { Footer, Header } from "./header"
import RecipeForm from "./form"
import RecipeList from "./recipelist"
function App() {
  return(
    <div>
      <Header/>
      {/* <DisplayRecipes/> */}
      <RecipeList/>
      <Footer/>
    </div>
  )
}

export default App
