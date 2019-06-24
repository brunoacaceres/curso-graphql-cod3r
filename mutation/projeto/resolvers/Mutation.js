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
    }
}