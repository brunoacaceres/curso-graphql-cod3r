const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola(){
        return 'Boa tarde!'
    },
    horaAtual(){
        // const data = new Date();
        // return data.toString();
        // return `${new Date}`
        return new Date
    },
    usuarioLogado(){
        return {
            id: 1,
            nome: 'Gislene e Lorena',
            email: 'GieLoly@email.com',
            idade: 3,
            salario_real: 9876.54,
            vip: true

        }
    },
    produtoEmDestaque(){
        return {
            nome: 'Raspberry Pi',
            preco: 100.00,
            // desconto: 50.00                
        }
    },
    numerosMegaSena(){
        // return [4,8,13,27,33,54]
        const crescente = (a, b) => a - b
        return Array(6).fill(0)
            .map(n => parseInt(Math.random() * 60 + 1))
            .sort(crescente)
    },
    usuarios() {
        return usuarios
    },
    usuario(_, { id }) {
        const sels = usuarios
            .filter(u => u.id === id)
        return sels ? sels[0] : null

    },
    perfis() {
        return perfis
    },
    perfil(_, { id }) {
        const sels = perfis
            .filter(p => p.id === id)
        return sels ? sels[0] : null

    }
}