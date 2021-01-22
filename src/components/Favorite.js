import React, {useContext} from 'react';
import style from './favorite.module.css';
import {CheckoutContext} from './CheckoutContext';

const Favorite = ({title,image,id}) => {

    const [favorites, setFavorites] = useContext(CheckoutContext);

    const removeMovie = x => {
        x.preventDefault();
        setFavorites(favorites.filter(movie => movie.id !== id))
    }
        return (
            <div className = {style.row}>
                <img className = {style.image} src = {image} onError={(e)=>{e.target.onerror = null; e.target.src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"}} alt = '' />               
                <div>{title}</div>
                <button className={style.remove} onClick={removeMovie}>&#x2715;</button>
            </div>
        )
}

export default Favorite;