import React from 'react';
import Song from './Song';
import PropTypes from 'prop-types';
import './Recent.css';

function Recent({ songs, brand }) {
    return <div className='recent'>
        <h2 className='brand'>{brand} 최신곡</h2>
        {
            songs.map((song, index) => {
                return <Song
                    key={song.no}
                    no={song.no}
                    title={song.title}
                    singer={song.singer}
                    idx={index}
                />
            })
        }
    </div>
}

Recent.propTypes = {
    songs: PropTypes.arrayOf(PropTypes.object).isRequired,
    brand: PropTypes.string.isRequired
}

export default Recent;