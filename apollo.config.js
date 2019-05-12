module.exports = {
  client: {
    service: {
      name: 'VueHeroes',
      localSchemaFile: './apollo-server/schema.graphql',
    },
    includes: ['./src/**/*.gql'],
  },
};
