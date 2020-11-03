const request = require('./request')

module.exports = class Episode {
    constructor(api_key, show, season, id){
        this.api_key = api_key;
        this.show = show;
        this.season = season;
        this.id = id;
    }

    GetDetails = () => request(this.api_key, `tv/${this.show}/season/${this.season}/episode/${this.id}`)

    GetAccountStates = () => request(this.api_key, `tv/${this.show}/season/${this.season}/episode/${this.id}/account_states`)

    GetCredits = () => request(this.api_key, `tv/${this.show}/season/${this.season}/episode/${this.id}/credits`)

    GetExternalIDs = () => request(this.api_key, `tv/${this.show}/season/${this.season}/episode/${this.id}/external_ids`)

    GetImages = () => request(this.api_key, `tv/${this.show}/season/${this.season}/episode/${this.id}/images`)

    GetTranslations = () => request(this.api_key, `tv/${this.show}/season/${this.season}/episode/${this.id}/translations`)

    GetVideos = () => request(this.api_key, `tv/${this.show}/season/${this.season}/episode/${this.id}/videos`)
}