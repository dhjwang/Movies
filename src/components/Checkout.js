import React, { useContext } from 'react';
import {CheckoutContext} from './CheckoutContext';
import Favorite from './Favorite';
import '../App.css'

const Checkout = () => {
    const [favorites,setFavorites] = useContext(CheckoutContext)
    return (
        <div className = 'checkout'>
            {!favorites.length && 
                <div className='none'>No movies in Checkout. Find some movies in the Search section.</div>
            }
            {!!(favorites.length) && favorites.map(movie => (
                <Favorite key = {movie.id} id = {movie.id} title = {movie.title} image = {movie.image}></Favorite>
            )) }
            {!!(favorites.length) && 
            <button className = 'confirm' onClick={() => alert('Confirmed')}>Confirm</button> }
        </div>
    )
}

export default Checkout;