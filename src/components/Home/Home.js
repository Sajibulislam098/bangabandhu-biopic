import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Heros from '../Heros/Heros';
import './Home.css'

const Home = () => {

    const [heros, setHeros] = useState([])
    const [cart, setCart] = useState([])
    const handleAddHeros = (heros) => {
        const newCart = [...cart, heros]
        setCart(newCart)
        console.log(newCart)
    }
    useEffect(() => {
        fetch('./details.JSON')
            .then(res => res.json())
            .then(data => setHeros(data))
    }, [])

    return (

        <div className="body">
            <div className="header ">
                <h3>Biopic of</h3>
                <h1 className="text">Banghabandhu Sheikh Mujibur Rahman </h1>
                <h4>Highly Experienced Actors are here,who are Applicable in this Film.Choose from below...</h4>
                <h2>Total Budget:$100 Million</h2>
            </div>

            <div className="row hero-body">
                {/* Product Container */}
                <div className="col-md-9">

                    <div className="row">
                        {
                            heros.map(hero => <Heros
                                key={hero.name}
                                handleAddHeros={handleAddHeros}
                                heros={hero}
                            ></Heros>)
                        }
                    </div>

                </div>
                {/* Cart Container */}
                <div className="col-md-3">
                    <Cart
                        cart={cart}
                    > </Cart>
                </div>
            </div>

        </div>


    );
};

export default Home;