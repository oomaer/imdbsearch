
import {useState} from 'react';
import {Link} from 'react-router-dom';
import './searchbar.css'
const SearchBar = ({setData, type, setType, input, setInput}) => {

    const [statusMsg, setStatusMsg] = useState('');

    const changeType = (event) => {
        setType(event.target.value)    
    }

    const SearchClick = () => { 
        fetch('https://imdbsearch-backend.herokuapp.com/search', {
            method: 'post',
            headers : {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                type : type,
                text : input,
                sort : 'None'
            })
        }).then(response => {
            if(!response.ok){
                setStatusMsg('Error Searching Data')
            }
            else{
                response.json().then(result => {
                    setData(result);
                })
            }
        
        })
        .catch(err => {
            setStatusMsg('Error Connection to Server');
        });
        setStatusMsg('');
    
    }

    return(
        <div className = 'searchbar-container'>
            <h2>Search</h2>
            <div className = 'search-bar'>
                <div className = 'nav-searchbar-type'>
                    <label>{type} ˅ </label>
                    <ul>
                        <li><button onClick = {changeType} value = {'Title'}>Title</button></li>
                        <li><button onClick = {changeType} value = {'Actor'}>Actor</button></li>
                        <li><button onClick = {changeType} value = {'Director'}>Director</button></li>
                        <li><button onClick = {changeType} value = {'Genre'}>Genre</button></li>
                    </ul>
                </div>
                <input className = 'search-input' placeholder = 'type to search...' value = {input} onChange = {(event) => setInput(event.target.value)}></input>
            </div>
            <Link to = '/results'><button onClick = {SearchClick} className = 'clickbtn'>Search</button></Link>
            <label className = 'statusMsg'>{statusMsg}</label>
        </div>
        
    )
}

export default SearchBar;