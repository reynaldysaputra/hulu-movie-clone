import React from 'react';
import ItemHeader from './itemHeader';
import {ReactComponent as Home} from '../../assets/img/home.svg';
import {ReactComponent as Lighting} from '../../assets/img/lighting.svg';
import {ReactComponent as Verified} from '../../assets/img/verified.svg';
import {ReactComponent as Collection} from '../../assets/img/collection.svg';
import {ReactComponent as Search} from '../../assets/img/search.svg';
import {ReactComponent as User} from '../../assets/img/user.svg';
import {ReactComponent as Hulu} from '../../assets/img/hulu.svg';

function Header(){
  return(
    <header className='px-10 py-5 flex flex-col sm:flex-row justify-between'>
      <section className='flex justify-evenly items-center mb-5 max-w-2xl'>
        <ItemHeader Icon={Home} title='HOME' />
        <ItemHeader Icon={Lighting} title='TRENDING' />
        <ItemHeader Icon={Verified} title='VERIFIED' />
        <ItemHeader Icon={Collection} title='COLLECTIONS' />
        <ItemHeader Icon={Search} title='SEARCH' />
        <ItemHeader Icon={User} title='ACCOUNT' />
      </section>
      <section className='flex justify-center'>
        <Hulu className='w-20 h-6' />
      </section>
    </header>
  )
}

export default Header;
// flex justify-between items-center p-5