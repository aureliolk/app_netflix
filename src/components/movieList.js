import React from 'react'
import '../assets/movieList.css'


export default ({ title, items }) => {
    return (
        <div className='movie-content'>
            <h2>{title}</h2>
            <div className="movie-list-area">
                <div className="movie-list">
                    {items[0].results.length > 0 && items[0].results.map((item, key) => (
                        <div className="movie-list-item" key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_name}  />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}