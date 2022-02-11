import './App.css'
import { Routes, Route } from 'react-router-dom'

// Components
import Categories from './components/Categories'
import CategoryRecipes from './components/CategoryRecipes'
import NoMatch from './components/NoMatch'
import Recipe from './components/recipeComponents/Recipe'
import About from './components/About'

// API Data
import recipes from './recipes.json'
import SubmitRecipe from './components/submitRecipeComponents/SubmitRecipe'

function App() {
  let categoriesArray = Object.keys(recipes)

  return (
    <Routes>
      <Route path="/" element={ <Categories categories={ categoriesArray }/> } />
      <Route path="/:category" element={ <CategoryRecipes recipeData={ recipes } /> } />
      <Route path="/:category/:recipe" element={ <Recipe recipeData={ recipes } /> } />
      <Route path="/submit" element={ <SubmitRecipe /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="*" element={ <NoMatch /> } />
    </Routes>
  )
}

export default App