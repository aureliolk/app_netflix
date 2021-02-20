import name_service from './base_name_services.js'

const API_KEY = '5657d5b44481257a35ed1b4a67ed0b39'
const API_BASE = 'https://api.themoviedb.org/3/'


/*
 > Originais do NetFlix
 > Recomendados
 > Em Alta
 > Ação 
 > Comedia
 > Terror
 > Romance
 > Documentario
*/

const getItem = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json
}

export default{
    getItemlist: async ()=>{
        return [
            {
                slug:'original',
                title:`Originais do ${name_service.base_name()}`,
                items:[ await getItem(`discover/tv/?with_network=213&api_key=${API_KEY}&language=${name_service.base_lenguage()}`)]
            },
            {
                slug:'recommeds',
                title:`Recomendados do ${name_service.base_name()}`,
                items:[ await getItem(`trending/all/week?api_key=${API_KEY}&language=${name_service.base_lenguage()}`)]
            },
            {
                slug:'top_rated',
                title:`Em alta do ${name_service.base_name()}`,
                items:[ await getItem(`movie/top_rated?api_key=${API_KEY}&language=${name_service.base_lenguage()}`)]
            },
            {
                slug:'action',
                title:` Ação`,
                items:[ await getItem(`discover/movie?with_genres=28&api_key=${API_KEY}&language=${name_service.base_lenguage()}`)]
            },
            {
                slug:'commedy',
                title:` Comédia`,
                items:[ await getItem(`discover/movie?with_genres=35&api_key=${API_KEY}&language=${name_service.base_lenguage()}`)]
            },
            {
                slug:'horro',
                title:` Terro`,
                items:[ await getItem(`discover/movie?with_genres=27&api_key=${API_KEY}&language=${name_service.base_lenguage()}`)]
            },
            {
                slug:'romance',
                title:` Romance`,
                items:[ await getItem(`discover/movie?with_genres=10749&api_key=${API_KEY}&language=${name_service.base_lenguage()}`)]
            },
            {
                slug:'documents',
                title:` Documentos`,
                items:[ await getItem(`discover/movie?with_genres=99&api_key=${API_KEY}&language=${name_service.base_lenguage()}`)]
            }
        ]
    },
    getSingleMovies: async ( movieId, type) =>{
        let info = {};

        if(movieId){
            switch(type){
                case 'movie':
                    info = await getItem(`movie/${movieId}?api_key=${API_KEY}&language=${name_service.base_lenguage()}`)
                break;
                case 'tv':
                    info = await getItem(`tv/${movieId}?api_key=${API_KEY}&language=${name_service.base_lenguage()}`)
                break;
            }
        }

        return info
    }
}