var listRepo = document.querySelector('ul')
var listItem = document.createElement('li')

function searchGithub() {
    var user = document.querySelector('input').value
    listRepo.innerText = ''
    listItem.innerText = 'Carregando...'
    listRepo.appendChild(listItem)

    axios.get('https://api.github.com/users/' + user + '/repos')
    .then(function(response) {
        renderRepos(response.data)
    })
    .catch(function(error) {
        if (error.response.status === 404) {
            listItem.innerText = 'O usuário não foi encontrado...'
            listRepo.appendChild(listItem)
        }
        console.warn(error)
    })
}

function renderRepos(repos) {
    listRepo.innerHTML = ''
    for (repo of repos) {
        var listItem = document.createElement('li')
        listItem.innerText = repo.name
        listRepo.appendChild(listItem)
    }
}