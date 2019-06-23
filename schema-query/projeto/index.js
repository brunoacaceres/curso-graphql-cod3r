const { ApolloServer, gql} = require('apollo-server')

const typeDefs = gql`
    scalar Date

    type Usuario {
        id: ID
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
        blabla: String
    }

    # Pontos de entrada da sua API!
    type Query {
        ola: String!
        horaAtual: Date!
        usuarioLogado: Usuario
    }
`

const resolvers = {
    // Criando Resolver para um campos de nomes diferentes Ex: salario e salario_real
    Usuario: {
        salario(usuario) {
            return usuario.salario_real
        },
        
        blabla() {
            return 'Opa'
        }        
    },

    //Objeto Query
    Query: {
        ola(){
            return 'Boa tarde!'
        },
        horaAtual(){
            // const data = new Date();
            // return data.toString();
            // return `${new Date}`
            return new Date
        },
        usuarioLogado(Objeto){
            console.log(Objeto)
            return {
                id: 1,
                nome: 'Gislene e Lorena',
                email: 'GieLoly@email.com',
                idade: 3,
                salario_real: 9876.54,
                vip: true

            }
        }

    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})