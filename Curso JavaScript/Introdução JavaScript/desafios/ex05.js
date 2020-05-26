var usuarios = [
    {
        nome: 'Diego',
        habilidades: ['JavaScript', 'ReactJs', 'Redux']
    },
    {
        nome: 'Gabriel',
        habilidades: ['VueJs', 'Ruby On Rails', 'Elixir']
    }
]

for (const user of usuarios) {
    console.log(`O ${user.nome} possui as habilidades: ${user.habilidades.join(', ')}`)
}