import React from 'react'
import '../assets/featureMovies.css'

export default ({ item }) => {

    let firstDate = new Date(item.last_air_date);
    let genero = [];
    for(let i in item.genres){
        genero.push(item.genres[i].name)
    }

    console.log(firstDate)

    return (
        <section className="features-content" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
        }}>
            <div className="features-vertical">
                <div className="features-horizontal">
                    <div className="features-name">{item.original_name}</div>
                    <div className="features-info">
                        <div className="features-points">{item.vote_average} pontos</div>
                        <div className="features-year">{firstDate.getFullYear()}</div>
                        <div className="features-season">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ' '}</div>
                    </div>
                    <div className="features-desc">{item.overview}</div>
                    <div className="features-button">
                        <a href={`/watch/${item.id}`} className="play">⯈ Assistir</a>
                        <a href={`/list/add/${item.id}`} className="add">🞥 Minha lista</a>
                    </div>
                    <div className="features-generos"><strong>Genero: </strong>{genero.join(', ')}</div>
                </div>
            </div>
            {console.log(item)}
        </section>
    )
}