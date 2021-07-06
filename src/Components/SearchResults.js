import FilterResultCard from './FilterResultCard';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import './searchresults.css'


const SearchResults = ({data, setData, type, input}) => {
    const [sort, setSort] = useState('None');
    

    const changeSort = (event) => {
        setSort(event.target.value);
        fetch('https://imdbsearch-backend.herokuapp.com/search', {
            method: 'post',
            body: JSON.stringify({
                type : type,
                text : input,
                sort : event.target.value
            })
        }).then(response => {
            if(!response.ok){
                console.log('error searching movie');
            }
            else{
                response.json().then(result => {
                    setData(result);
                })
            }
        
        })
        .catch(err => {
            console.log('error connecting to server');
        });
    }

    return(
        <div className = 'search-results-container'>
            <div className = 'search-results-content'>
                <Link to = '/'><h1 id = 'logo-header'>IMDB SEARCH</h1></Link>
                <div className = 'search-results-header'>
                    <h1>Searched Results</h1>
                    <div className = 'search-result-sort'>
                        <label>Sort by: </label>
                        <div className = 'search-result-sort-type'>
                            <label>{sort}</label>
                            <ul>
                                <li><button onClick = {changeSort} value = {'None'}>None</button></li>
                                <li><button onClick = {changeSort} value = {'Rating'}>Rating</button></li>
                                <li><button onClick = {changeSort} value = {'Award Wins'}>Award Wins</button></li>
                                <li><button onClick = {changeSort} value = {'Year'}>Year</button></li>
                                <li><button onClick = {changeSort} value = {'Runtime'}>Runtime</button></li>
                                <li><button onClick = {changeSort} value = {'Votes'}>Votes</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul className = 'search-results-list'>
                    {data.map(item => {
                        return <li><FilterResultCard item = {item}/></li>
                    })}
                </ul>
            </div>
        </div>
    )

} 

export default SearchResults;