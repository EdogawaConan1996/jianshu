import React from 'react';
import HeaderComponent from './components/header';
import {BrowserRouter, Route} from 'react-router-dom';
import IndexPage from './pages/index';
import DetailPage from './pages/detail';


function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <BrowserRouter>
        <div>
          <Route path="/" exact component={IndexPage}></Route>
          <Route path="/detail" exact component={DetailPage}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
