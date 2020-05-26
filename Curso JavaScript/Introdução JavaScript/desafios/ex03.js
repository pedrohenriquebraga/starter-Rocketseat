function temHabilidade(skills) {
    return (skills.indexOf('JavaScript') != -1) ? true : false 
}

var skills = ['Python', 'ReactJs', 'React Native']
console.log(temHabilidade(skills))