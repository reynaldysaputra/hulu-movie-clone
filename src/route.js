import React from 'react';
import { Route, Switch, useLocation} from 'react-router-dom';
import Header from './components/header/header';
import { Hellow } from './components/hello';
import Navbar from './components/navbar/navbar';

export function RouteApp(props){
  const paramsSearch = new URLSearchParams(useLocation().search);

  return(
    <>
      <Header/>
      <Navbar/>
      
      <Switch>
        <Route path={`/genre/:genre`} component={Hellow} />
      </Switch>
    </>
  )
}
