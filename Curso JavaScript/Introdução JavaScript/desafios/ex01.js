function retornaEndereco(obj) {
    console.log(`O usuário mora em ${obj.cidade} / ${obj.uf}, no bairro ${obj.bairro}, na rua '${obj.rua}' com n° ${obj.numero}`)
}

var endereco = {
    rua: 'Rua dos Pinheiros',
    numero: 1293,
    bairro: 'Centro',
    cidade: 'São Paulo',
    uf: 'SP'
}

retornaEndereco(endereco)