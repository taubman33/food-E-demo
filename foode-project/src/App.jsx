import Home from './Components/Home'
import DrinksList from './Components/DrinksList'
import Drink from './Components/Drink'
import SearchResults from './Components/SearchResults'

import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    const getDrinks = async () => {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
      setDrinks(response.data.drinks)
    }

    getDrinks()
  })

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element = {<Home />}/>
        <Route exact path="/drinks" element = {<DrinksList drinks={drinks}/>}/>
        <Route exact path="/drinks/:id" element = {<Drink />}/>
        <Route exact path="/search/:id" element = {<SearchResults />}/>
      </Routes>
    </div>
  )
}

export default App
