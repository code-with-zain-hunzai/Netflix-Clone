import React, { useState, useEffect } from 'react';
import './Player.css';
import backArrowIcon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [apiData, setApiData] = useState({
        name: '',
        key: '',
        published_at: '',
        type: ''
    });

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDRlNTAxZGNiNjdlOTAyNTlmNTE1MzMxZTUzNzBjNCIsIm5iZiI6MTcyMTYzNTY3OS4wNjU2NSwic3ViIjoiNjY5ZTExOGFhZTFiZmQyZWMxNGJlN2M4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.pI6ZlvuQ15Kelz4t8nywxZ3ZXimMsM-vI4L78_LkuHI'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(response => response.json())
            .then(response => {
                if (response.results && response.results.length > 0) {
                    const video = response.results[0];
                    setApiData({
                        name: video.name,
                        key: video.key,
                        published_at: video.published_at,  // Adjust as necessary based on API response
                        type: video.type
                    });
                }
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className='player'>
            <img src={backArrowIcon} alt="Back arrow icon" onClick={() => navigate(-2)} />
            <iframe
                width='90%'
                height='90%'
                src={`https://www.youtube.com/embed/${apiData.key}`}
                title='Trailer'
                style={{ border: 0 }}
                allowFullScreen
            ></iframe>
            <div className="player-info">
                <p>{apiData.published_at.slice(0, 10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    );
}

export default Player;
