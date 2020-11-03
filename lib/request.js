const fetch = require('node-fetch')
const BASE_API = 'https://api.themoviedb.org/3'

module.exports = async (api_key, action, extras = null) => {
    var uri = `${BASE_API}/${action}?api_key=${api_key}&language=en-US`
    if(extras)  uri += `&${extras}`;
    var response = await fetch(uri)
    var result = await response.json()
    return result.results || result
}