const request = require('./request')
const Episode = require('./episode')

module.exports = class Season {
    constructor(api_key, show, id){
        this.api_key = api_key;
        this.show = show;
        this.id = id
    }

    GetDetails = () => request(this.api_key, `tv/${this.show}/season/${this.id}`)

    GetAccountStates = () => request(this.api_key, `tv/${this.show}/season/${this.id}/account_states`)
    
    GetCredits = () => request(this.api_key, `tv/${this.show}/season/${this.id}/credits`)

    GetExternalIDs = () => request(this.api_key, `tv/${this.show}/season/${this.id}/external_ids`)

    GetImages = () => request(this.api_key, `tv/${this.show}/season/${this.id}/images`)

    GetVideos = () => request(this.api_key, `tv/${this.show}/season/${this.id}/videos`)

    Episode = id => new Episode(this.api_key, this.show, this.id, id)
}