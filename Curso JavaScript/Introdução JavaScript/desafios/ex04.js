function experiencia(anos) {
    if (anos > 0 && anos <= 1) {
        return 'Iniciante'
    } else if (anos <= 3) {
        return 'Intermediário'
    } else if (anos <= 6) {
        return 'Avançado'
    } else {
        return 'Jedi Master'
    }
}

var estudo = 7
console.log(experiencia(estudo))