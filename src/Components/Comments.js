import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import './comments.css';

const Comments = () => {
    const [comments, setComments] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch('https://imdbsearch-backend.herokuapp.com/getComments', {
            method: 'post',
            headers : {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                movie_id: id
            })
        }).then(response => {
            if(!response.ok){
                console.log('error getting comments')
            }
            else{
                response.json().then(result => {
                    setComments(result);
                })
            }
        
        })
        .catch(err => {
            console.log('error connecting to server');
        });
    }, [id]);

    return(
        <div className = 'content-reviews-container'>
            <div className = 'content-reviews-content'>
            <Link to = '/'><h1 id = 'logo-header'>IMDB SEARCH</h1></Link>
                <h1>Comments</h1>
                <ul>
                    {comments.map(comment => {
                        return (<li>
                            <div className = 'filterresultcard-container'>
                                <div className = 'filterresultcard-content'>
                                    <div className = 'filterresultcard-details'>
                                        <div className = 'card-dateandtime'>
                                            <label id = 'filterresultcard-details-releasedate'>{comment.date.split('T')[0]}</label>    
                                            <label id = 'filterresultcard-details-releasedate'>{comment.date.split('T')[1].split('.')[0]}</label>
                                        </div>    
                                        <h3 id = 'filterresultcard-details-title'>{comment.name}</h3>
                                        <p id = 'filterresultcard-detail-overview'>{comment.text}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Comments;