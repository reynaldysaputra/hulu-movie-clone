import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import request from '../../util/request';

const Results = ({genre}) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3${request[genre]?.url || request[genre].fetchTrending}`)  
      .then(res => res.json())
      .then(res => setResults(res.results))
      .catch(err => console.log(err))
  }, [genre])

  return (
    <>
      {
        genre ?(
          <>
            <h1>{genre}</h1>
            {console.log(results)}
          </>
        ) : 
        <Redirect to='/' />
      }
    </>
  )
}

export default Results;