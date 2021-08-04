import React from 'react';

function ItemHeader({Icon, title}) {
  return(
    <div className='group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white'>
      <Icon className='mb-1 h-6 group-hover:animate-bounce' />
      <p className='tracking-widest	opacity-0 group-hover:opacity-100 text-xs'>{title}</p>
    </div>
  )
}

export default ItemHeader;