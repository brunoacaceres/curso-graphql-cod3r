const { ApolloServer, gql} = require('apollo-server')

const typeDefs = gql`
    # Pontos
    type Query {

    }
`

const resolvers = {

}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})