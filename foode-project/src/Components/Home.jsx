import Nav from './Nav'

const Home = () => {
    return (
        <div className="home-page">
            <Nav />
            <div className="home-content-container">
                <img src="https://images6.alphacoders.com/526/526622.jpg" alt="" className='home-image'/>
                <h1 className="home-title">Welcome to FoodE!</h1>
            </div>
        </div>
    )
}

export default Home