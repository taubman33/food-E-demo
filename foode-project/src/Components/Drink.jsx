import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav'

const Drink = () => {

    const [drink, setDrink] = useState()
    let {id} = useParams()

    useEffect(() => {
        const getDrink = async() => {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            setDrink(response.data.drinks[0])
        }
        getDrink()
        }, [])

    return drink ? (
        <div className="drink-detail-page">
            <Nav />
            <div className="drink-detail-content">
                <img src={drink.strDrinkThumb} alt="" className="drink-detail-image" />
                <div className="drink-info">
                    <h1 className="drink-name">{drink.strDrink}</h1>
                    <div className="content-grid">
                        <h3 className="content-title">Glass:</h3>
                        <p className="content-data">{drink.strGlass}</p>
                        <h3 className="content-title">Category:</h3>
                        <p className="content-data">{drink.strCategory}</p>
                    </div>
                    <h3 className="content-title2">Instructions:</h3>
                    <p className="content-data2">{drink.strInstructions}</p>
                </div>
            </div>
        </div>
    ) : <h1 className='loading'>Finding data...</h1>
}
export default Drink