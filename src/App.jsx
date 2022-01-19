import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Routes, Route } from 'react-router-dom';
import './Style.scss';
import Header from './components/Header.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route></Route>
      </Routes>
    </>
  )
}

export default App
