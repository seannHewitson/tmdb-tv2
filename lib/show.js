const request = require('./request')
const Season = require('./season')

module.exports = class Show {
    constructor(api_key, id){
        this.api_key = api_key
        this.id = id
    }

    GetDetails = () => request(this.api_key, `tv/${this.id}`)

    GetAccountStates = () => request(this.api_key, `tv/${this.id}/account_states`)

    GetAlternativeTitles = () => request(this.api_key, `tv/${this.id}/alternative_titles`)

    GetChanges = (page = 1) => request(this.api_key, `tv/${this.id}/changes`, `page=${page}`)

    GetContentRatings = () => request(this.api_key, `tv/${this.id}/content_ratings`)

    GetCredits = () => request(this.api_key, `tv/${this.id}/credits`)

    GetEpisodeGroups = () => request(this.api_key, `tv/${this.id}/episode_groups`)

    GetExternalIDs = () => request(this.api_key, `tv/${this.id}/external_ids`)

    GetImages = () => request(this.api_key, `tv/${this.id}/images`)

    GetKeywords = () => request(this.api_key, `tv/${this.id}/keywords`)

    GetRecommendations = (page = 1) => request(this.api_key, `tv/${this.id}/recommendations`, `page=${page}`)

    GetReviews = (page = 1) => request(this.api_key, `tv/${this.id}/reviews`, `page=${page}`)

    GetScreenedTheatrically = () => request(this.api_key, `tv/${this.id}/screened_theatrically`)

    GetSimilarShows = (page = 1) => request(this.api_key, `tv/${this.id}/similar`, `page=${page}`)

    GetTranslations = () => request(this.api_key, `tv/${this.id}/translations`)

    GetVideos = () => request(this.api_key, `tv/${this.id}/videos`)

    Season = id => new Season(this.api_key, this.id, id)
}