import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import request from '../../util/request';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {ReactComponent as ThumbUpIcon} from '../../assets/img/thumbUp.svg';
import FlipMove from 'react-flip-move';

const Results = ({genre}) => {
  const [results, setResults] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(true);
  const BASE_URL= 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {    
    fetch(`https://api.themoviedb.org/3${request[genre]?.url || request.fetchTrending.url}`)  
    .then(res => res.json())
    .then(res => {
      setResults(res.results);
      setHasLoaded(false);
    })
    .catch(err => console.log(err))
  }, [genre])

  return (
    <>
      {
        hasLoaded ? <h1>Loading..</h1> : (
          <div className='px-10 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 2xl:flex flex-wrap justify-center flex-row gap-10'>
              {results.map(item => (
                <FlipMove easing='ease-in' className='flex-1'>
                  <div key={item.id} className='group cursor-pointer transition duration-200 transform mt-5 sm:mt-0 sm:hover:scale-105 hover:z-50 w-full'>
                    <LazyLoadImage
                      alt={item.title}
                      width='auto'
                      height='auto'
                      src={`${BASE_URL}${item.backdrop_path}`} 
                      effect='blur' 
                      className='2xl:w-full'
                      placeholderSrc='https://play-lh.googleusercontent.com/4whGAVjZGrrlNxzheKAfBXrxggtyAb4euWLeQI8fDfVfdnFEZjE0DZTJ8DKoh64pqcIa'
                    />
                    <div className='p-2 space-y-1'>
                      {console.log(item)}
                      <p className='truncate max-w-sm'>{item.overview}</p>
                      <h2 className='mt-1 text-2xl text-white transition-all duration-300 group-hover:font-bold'>{item.title || item.original_title || item.original_name}</h2>
                      <p className='flex items-center transition duration-300 opacity-0 group-hover:opacity-100'>
                        {item.release_date}&nbsp;&nbsp;
                        <ThumbUpIcon/>&nbsp; {item.vote_count}
                      </p>
                    </div>
                  </div>
                </FlipMove>
              ))}
          </div>
        )
      }
    </>
  )
}

export default Results;