import React from 'react';
import { Switch, useLocation} from 'react-router-dom';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Results from './components/result/result';

export function RouteApp(){
  const paramsSearch = new URLSearchParams(useLocation().search).get('genre');

  return(
    <>
      <Header/>
      <Navbar/>
      
      <Switch>
        <Results genre={paramsSearch} />
      </Switch>
    </>
  )
}
