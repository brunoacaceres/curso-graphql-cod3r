const { usuarios, proximoId } = require('../data/db')

module.exports = {
    //Spread: Colocando { nome, email, idade } > args
    novoUsuario(_, args ) {
        const emailExistente = usuarios
            .some(u => u.email === args.email)

            if(emailExistente){
                throw new Error('E-mail ja cadastrado')
            }

        const novo = {
            id: proximoId(),
            ...args,
            perfil_id: 1,
            status: 'ATIVO'
        }

        usuarios.push(novo)
        return novo
    },

    excluirUsuario(_, { id }) {
        const i = usuarios
            .findIndex(u => u.id === id)
        if(i < 0) return null
        const excluidos = 
            usuarios.splice(i, 1)
        return excluidos ? 
            excluidos[0] : null
    },

    alterarUsuario(_, args) {
        const i = usuarios
            .findIndex(u => u.id === args.id)
        if(i < 0) return null
        
        // Exemplo 01
        const usuario = {
            ...usuarios[i],
            ...args
        }
        usuarios.splice(i, 1, usuario)
        return usuario

        // Exemplo 02
        // usuarios[i].nome = args.nome
        // usuarios[i].email = args.email
        // usuarios[i].idade = args.idade
        
        // return usuarios[i]
    }
}