const db = require('../../config/db')
const { perfil: obterPerfil } = require('../Query/perfil')

module.exports = {
    async novoUsuario(_, { dados }) {
        try {
            const idsPerfis = []
            if(dados.perfis){
                for(perfilFiltro of dados.perfis){
                    const perfil = await obterPerfil(_, {
                        filtro: { ...perfilFiltro}
                    })
                    if(perfil){
                        idsPerfis.push(perfil.id)
                    }
                }
            }
            //Como não existe na tabela é necessario apagar
            delete dados.perfis

            //Inserindo usuarios
            const [ id ] = await db('usuarios')
                .insert(dados)
            
            // Inserindo Perfis do usuário
            for(perfil_id of idsPerfis) {
                await db('usuarios_perfis')
                    .insert({ perfil_id, usuario_id: id })
            }

            return db('usuarios')
                .where({ id  }).first()

        } catch(e){
            throw new Error(e.sqlMessage)
        }
    },
    async excluirUsuario(_, { filtro }) {
        try {

        } catch(e){
            throw new Error(e.sqlMessage)
        }    },
    async alterarUsuario(_, { filtro, dados }) {
        try {

        } catch(e){
            throw new Error(e.sqlMessage)
        }
    }
}