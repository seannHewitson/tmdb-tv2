const request = require('./request')
const Show = require('./show')

module.exports = class TMDB {
    constructor(api_key){
        this.api_key = api_key;
    }

    Search = (term, page = 1) => request(this.api_key, 'search/tv', `query=${term.replace(' ', '%20')}&page=${page}`)

    GetLatest = () => request(this.api_key, 'tv/latest')

    GetAiringToday = (page = 1) => request(this.api_key, 'tv/airing_today', `page=${page}`)

    GetOnTheAir = (page = 1) => request(this.api_key, 'tv/on_the_air', `page=${page}`)
    
    GetPopular = (page = 1) => request(this.api_key, 'tv/popular', `page=${page}`)

    GetTopRated = (page = 1) => request(this.api_key, 'tv/top_rated', `page=${page}`)

    Show = id => new Show(this.api_key, id)
}

