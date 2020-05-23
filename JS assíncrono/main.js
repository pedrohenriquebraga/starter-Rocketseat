function loadRepos(){
    axios.get('https://api.github.com/users/pedrohenriquebraga')
    .then(function(response) {
        return response
    })
    .catch(function(error) {
        console.warn(error)
    })
}

