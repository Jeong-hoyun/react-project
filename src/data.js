import React, { useState, } from 'react';



function Data() {
  const [inputs, setInputs] = useState({"Search":
  [{"Title":"Bet on Revenge","Year":"2017","imdbID":"tt4964310","Type":"movie","Poster"
  :"https://m.media-amazon.com/images/M/MV5BNzU1YzkzYzQtYTdkMS00ZWM1LThjOWQtMjg1NGIwM2I0MDc5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTkzMzMyNDA@._V1_SX300.jpg"}
  ,{"Title":"You Bet Your Life","Year":"1950–1961",
  "imdbID":"tt0042171","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BNjQxNTllYzgtYjUwMS00NDhmLTgwYjUtMzc4NTlmZGI5YzhlXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg"}
  ,{"Title":"Bet Your Life","Year":"2004","imdbID":"tt0381980","Type":"movie","Poster":
  "https://m.media-amazon.com/images/M/MV5BOTk1MzUyMjU3NV5BMl5BanBnXkFtZTcwNzkwMTY2MQ@@._V1_SX300.jpg"},
  {"Title":"Early to Bet","Year":"1951","imdbID":"tt0043495","Type":"movie","Poster":
  "https://m.media-amazon.com/images/M/MV5BODdhOWY4YmEtY2ZkZi00NWQ4LWE0NGQtOGZlZWFiN2QxNGRhXkEyXkFqcGdeQXVyNjc2NjkzNTg@._V1_SX300.jpg"},
  {"Title":"The Top Bet","Year":"1991","imdbID":"tt0101780","Type":"movie","Poster":
  "https://m.media-amazon.com/images/M/MV5BMTUzOTczNTc4NV5BMl5BanBnXkFtZTgwMzE0ODc2MzE@._V1_SX300.jpg"},
  {"Title":"Don't Bet on Blondes","Year":"1935","imdbID":"tt0026289","Type":"movie","Poster":
  "https://m.media-amazon.com/images/M/MV5BM2I5M2ExOTctNzJkZi00OTRjLTkxMTMtODNiODE4ZGU3NWI4XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg"},
  {"Title":"Bet Raise Fold","Year":"2013","imdbID":"tt2719370","Type":"movie","Poster":
  "https://m.media-amazon.com/images/M/MV5BMTY3MDgwODE0OF5BMl5BanBnXkFtZTcwNzY0MTA4OQ@@._V1_SX300.jpg"},
  {"Title":"Deadly Bet","Year":"1992","imdbID":"tt0104066","Type":"movie","Poster":
  "https://m.media-amazon.com/images/M/MV5BMTk5MDg5OTU4MV5BMl5BanBnXkFtZTcwNDEwMDYxMQ@@._V1_SX300.jpg"},
  {"Title":"Outside Bet","Year":"2012","imdbID":"tt1772422","Type":"movie","Poster":
  "https://m.media-amazon.com/images/M/MV5BMTgzOTUxMzY3MV5BMl5BanBnXkFtZTcwNDk2MDc2Nw@@._V1_SX300.jpg"},
  {"Title":"The Big Bet","Year":"1987","imdbID":"tt0088800","Type":"movie","Poster":
  "https://m.media-amazon.com/images/M/MV5BMWY5OTc2YjEtZTVmOC00MTkwLWFiZmItMmQyYmQzZGE3OGUzXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg"}],
  "totalResults":"350","Response":"True"});

  // 비구조화 할당을 통해 값 추출
  const arrayData= inputs.Search.map((itme,index)=>{
  return (
    <li key={index}>
    {itme.Title} {itme.Year}    
    </li>
  );
  }
  )
    return(
    <div>{ arrayData} </div>
  )

}
  
export default Data;