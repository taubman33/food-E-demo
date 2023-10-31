import Nav from './Nav'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const SearchResults = () => {

    let navigate = useNavigate()

    const showDrink = (key) => {
        navigate(`/drinks/${key}`)
    }

    const location = useLocation();
    const results = location.state.results;

    return(
        <div className="drinks-page">
            <Nav />
            <h1 className='drink-list-title'>Search Results</h1>
            
            <div className="grid-container">
                {
                    results.map((drink) => (
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

export default SearchResults