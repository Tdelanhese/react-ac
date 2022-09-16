import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './home';
import Usuario from './usuario';
import Formulario from './formulario';

function App() {
  return (
    <>
      <header>
        <Link to='/usuario'>Usuario</Link>
        <Link to='/form'>Formulário</Link>
        <Link to='/home'>Home</Link>
      </header>

      <main>
        <Switch>
          <Route path='/usuario' component= {Usuario}/>
          <Route path='/form' component= {Formulario}/>
          <Route path='/home' component= {Home}/>
        </Switch>
      </main>
    </>
  );
}

export default App;
