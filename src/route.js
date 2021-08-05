import React from 'react';
import { Switch, useLocation} from 'react-router-dom';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Results from './components/result/result';

export function RouteApp(props){
  const paramsSearch = new URLSearchParams(useLocation().search);

  return(
    <>
      <Header/>
      <Navbar/>
      
      <Switch>
        <Results genre={paramsSearch.get('genre')} />
      </Switch>
    </>
  )
}
