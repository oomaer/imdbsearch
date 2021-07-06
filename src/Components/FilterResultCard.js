import {Link} from 'react-router-dom';
import './filterresultcard.css';

const FilterResultCard = ({item}) => {
    
    return(
        <div className = 'filterresultcard-container'>
            <div className = 'filterresultcard-content'>
                    {item.poster === undefined ? (
                    <div className = 'filterresultcard-image-container'>
                        <img alt = 'card' src = {`https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Light-With-Image.jpg?x81279`}></img> 
                    </div>
                    ):
                    (
                    <div className = 'filterresultcard-image-container'>
                        <img alt = 'card' src = {item.poster}></img> 
                    </div>
                    )}       
                <div className = 'filterresultcard-details'>
                    <label id = 'filterresultcard-details-releasedate'>{item.year}</label>
                    <div className = 'filterresultcard-titleandrating'>
                        <div className = 'filterresultcard-title'>
                            <h3 id = 'filterresultcard-details-title'>{item.title} </h3>
                            <label id = 'result-card-movie-type-lbl'> ({item.type})</label>
                        </div>
                        <label id = 'filterresultcard-details-rating'>★ {item.imdb.rating} <span>/ {item.imdb.votes}</span></label>
                    </div>
                    <p id = 'filterresultcard-detail-overview'>{item.plot}</p>
                    {item.directors !== undefined ? (
                    <div className = 'result-movie-elements'>
                        <label id = 'result-movie-element-heading'>Directors:  </label>
                        {item.directors.map((result, index) => {
                            if(index === item.directors.length - 1){
                                return <label>{result}</label>
                            }
                            else{
                                return <label>{result}, </label>
                            }
                            
                        })}
                    </div>):(null)}
                    {item.genres !== undefined ? (
                    <div className = 'result-movie-elements'>
                        <label id = 'result-movie-element-heading'>Genres:  </label>
                        {item.genres.map((result, index) => {
                            if(index === item.genres.length - 1){
                                return <label>{result}</label>
                            }
                            else{
                                return <label>{result}, </label>
                            }
                            
                        })}
                    </div>
                    ):(null)}
                    {item.countries !== undefined ? (
                    <div className = 'result-movie-elements'>
                        <label id = 'result-movie-element-heading'>Countries:  </label>
                        {item.countries.map((result, index) => {
                            if(index === item.countries.length - 1){
                                return <label>{result}</label>
                            }
                            else{
                                return <label>{result}, </label>
                            }
                            
                        })}
                    </div>
                    ):(null)}
                    <div className = 'result-movie-elements result-movie-runtime'>
                        <label id = 'result-movie-element-heading'>Runtime:  </label>
                        <label>{item.runtime} minutes</label>
                    </div>
                   <Link to = {`${item._id}/comments`}><label id = 'view-comments-btn'>view comments..</label></Link>
                    
                </div>

            </div>
        </div>
    )
}
export default FilterResultCard;