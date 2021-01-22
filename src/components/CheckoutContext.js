import React,{useState,createContext} from 'react';

export const CheckoutContext = createContext();

export const CheckoutProvider = props => {
    const [favorites, setFavorites] = useState('');
    return(
        <CheckoutContext.Provider value = {[favorites, setFavorites]}>
            {props.children}
        </CheckoutContext.Provider>
    )
};