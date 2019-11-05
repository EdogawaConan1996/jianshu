import React from 'react';
import HeaderComponent from './components/header';
import {BrowserRouter, Route} from 'react-router-dom';
import DetailPage from './pages/detail';
import HomePage from './pages/home';


function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <BrowserRouter>
        <div>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/detail" exact component={DetailPage}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
