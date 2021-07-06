import Particles from 'react-particles-js';
import SearchBar from './SearchBar';
import './mainpage.css';


const params = {
  "particles": {
      "number": {
          "density": {
            "enable": true,
            "value_area": 800,
          },
          "value": 80
      },
      "size": {
          "value": 3,
          "random": true
      },
      "line-linked": {
        "enable_auto": true,
        "distance": 150,
        "opacity": 0.4
      },
      "move":{
        "speed": 2
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
}

function Mainpage({setData, type, setType, input, setInput}) {
  return (
    <div className="mainpage">
      <Particles className = 'particles' params = {params}/>
      <h1 className = 'app-header'>IMDB Search</h1>
      <SearchBar setData = {setData} type = {type} setType = {setType} input = {input} setInput = {setInput}/>
    </div>
  );
}

export default Mainpage;
