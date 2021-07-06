import React, {useState} from 'react';
import Mainpage from './Components/Mainpage';
import SearchResults from './Components/SearchResults';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Comments from './Components/Comments';
import './App.css';



function App() {
  const [data, setData] = useState([]);
  const [type, setType] = useState('Title');
  const [input, setInput] = useState('');

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/results'>
            <SearchResults data = {data} setData = {setData} type = {type} input = {input}/>
          </Route>
          <Route  path = '/:id/comments'>
            <Comments/>
          </Route>
          <Route path = '/'>
            <Mainpage setData = {setData} type = {type} setType = {setType} input = {input} setInput = {setInput}/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
