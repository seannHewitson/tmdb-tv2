const tmdb = require('./lib')

const TMDB = new tmdb('REDACTED')


TMDB.Search('Lucifer')
.then(results => {
    const Show = TMDB.Show(results[0].id)
    Show.GetDetails()
    .then(details => {
        console.log(details)
    })
})