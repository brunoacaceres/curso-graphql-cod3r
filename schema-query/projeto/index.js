const { ApolloServer, gql} = require('apollo-server')
const  { importSchema } = require ('graphql-import')
const resolvers = require('./resolvers')

const schemaPath = './schema/index.graphql'

const server = new ApolloServer({
    //Mudando para graphql-import
    // typeDefs,
    typeDefs: importSchema(schemaPath),
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})