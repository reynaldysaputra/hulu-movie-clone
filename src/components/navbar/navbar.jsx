import React from 'react';
import { useHistory } from 'react-router-dom';
import request from '../../util/request';

function Navbar(){
  const history = useHistory();
    
  return(
    <nav className='relative'>
      <div className='flex px-10 mt-5 sm:pl-20 text-2xl whitespace-nowrap space-x-10 sm:space-20 overflow-x-scroll scrollbar-hide'>
        {Object.entries(request).map(([key, { title, url }]) => ( 
          <h2 
            key={key} 
            className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-300' 
            onClick={() => history.push(`/genre/${key}`)}
          >{title}</h2>
        ))}
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-gray-800 w-1/12 h-10' />
    </nav>
  )
}

export default Navbar;