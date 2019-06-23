const { ApolloServer, gql} = require('apollo-server')

const usuarios = 
[
    {
        id: 1,
        nome: 'João Silva',
        email: 'jsilva@email.com',
        idade: 29
    },
    {
        id: 2,
        nome: 'Rafael Junior',
        email: 'rjunio@email.com',
        idade: 31
    },
    {
        id: 3,
        nome: 'Daniela Smith',
        email: 'dsmith@email.com',
        idade: 24
    }
]


const typeDefs = gql`
    scalar Date

    type Usuario {
        id: Int
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
        numerosMegaSena: [Int!]!
        usuarios: [Usuario]
        usuario(id: Int): Usuario
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