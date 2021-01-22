import React, {useEffect, useState, useRef} from 'react';
import Movie from './Movie';
import '../App.css';

const Search = () => {

    const KEY = "8c87be91"

    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [results, setResults] = useState('');

    const getMovies = async () => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
        const data = await response.json();
        if (data.Response === 'True'){
            document.getElementsByClassName("alert")[0].textContent = ''
            setResults(data.Search)
        } else {
            document.getElementsByClassName("alert")[0].textContent = 'Try another search.';
            setResults('')
        }
    }

    const initialMount = useRef(true);
    useEffect(() => {
        if (initialMount.current){
            initialMount.current = false;
        } else {
            getMovies();
        }},[query]);

    const updateSearch = x => {
        setSearch(x.target.value);
    }

    const getSearch = x => {
        x.preventDefault();
        setQuery(search)
    }
  
    return (
        <div className = 'search'>
            <form onSubmit = {getSearch}>
                <input type = 'text' placeholder = "Search for a Movie" value = {search} onChange = {updateSearch}></input>
                <button type = 'submit'>Search</button>
            </form>
            <div className='alert'></div>
            <div className = 'movies'>
                {!!(results.length) && results.map(movie => (
                <Movie key = {movie.imdbID} id = {movie.imdbID} title = {movie.Title} image = {movie.Poster} yearreleased = {movie.Year}></Movie>
                ))}
            </div>
        </div>
    )
}

export default Search;