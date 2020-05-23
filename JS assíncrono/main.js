var minhaPromise = function() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.github.com/users/pedrohenriquebraga')
        xhr.send(null)

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject('Erro na requisição!!')
                }
            }
        }
    })
}

var resultado = minhaPromise()
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.warn(error)
    })