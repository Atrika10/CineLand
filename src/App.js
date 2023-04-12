import './App.css';
import searchIcon from './searchIcon.svg';
import MovieCard from './MovieCard.js';
import { useState } from 'react';
const API_URL = 'https://www.omdbapi.com?apikey=56ff447c';



function App() {

  const[movies, setMovies] = useState([]);
  const[searchTerm, setSearchTerm] = useState('');

  // function for fetch movies
  const searchMovies =async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  }
  //searchMovies('batman');
  const enterKey = (e)=>{
    if(e.key === 'Enter'){
      searchMovies(searchTerm);
    }
  }
  return (
    <div className='app'>
      <h1>CineLand</h1>

      <div className="search">
        <input type="text"
          placeholder="search movie"
          value={searchTerm} 
          onChange={(e)=>{setSearchTerm(e.target.value)}}
          onKeyDown={enterKey}/>

         <img src={searchIcon} alt="searchimg" onClick={()=>{searchMovies(searchTerm)}} /> 

      </div>

      {
        movies.length > 0 ? (<div className="container">
        {
          movies.map((movie)=>(
          <MovieCard movie={movie}/>
          ))
          
        }

      </div>) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
          )
    
          
      }
  
    </div>
  );
}

export default App;
