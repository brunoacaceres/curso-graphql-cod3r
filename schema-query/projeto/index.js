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

    type Produto {
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto: Float
    }

    # Pontos de entrada da sua API!
    type Query {
        ola: String!
        horaAtual: Date!
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
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

    Produto: {
        precoComDesconto(produto) {
            if(produto.desconto) {
                return produto.preco - (produto.preco * produto.desconto)/100 
            } else {
                return produto.preco
            }
            
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