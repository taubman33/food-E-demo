import Nav from './Nav'
import SearchResults from './SearchResults'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const DrinksList = (props) => {

    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    let navigate = useNavigate()

    const handleSearch= async () => {
        if(searchQuery !== '') {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`)
            if(response.data.drinks !== null) {
                setSearchResults(response.data.drinks)
            } else {
                alert(`We couldn't find that drink!`)
                setSearchQuery('')
            }
            } else {
                alert(`You have not entered anything to search!`)
        } 
    }

    useEffect(() => {
        if(searchResults.length > 0) {
            navigate('/search/:id', { state: { results: searchResults } })
        } 
    }, [searchResults, navigate])


    const showDrink = (key) => {
        navigate(`${key}`)
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            handleSearch()
        }
    }

    return(
        <div className="drinks-page">
            <Nav />
            <h1 className='drink-list-title'>Drink List</h1>
            <div className="search-container">
                <p className="search-label">Search:</p>
                <input type="text" className='search-bar' placeholder='Name of drink...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyPress={handleKeyPress} />
                <p className="search-button" onClick={handleSearch}>Search</p>
            </div>
            <div className="grid-container">
                {
                    props.drinks.map((drink) => (
                        <div key={drink.idDrink} className="card" onClick={() => showDrink(drink.idDrink)}>
                            <h2 className="card-title">{drink.strDrink}</h2>
                            <img src={drink.strDrinkThumb} alt='' className='card-image'/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DrinksList