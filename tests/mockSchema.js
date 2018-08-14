import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './mockResolvers';

const schema = `
    type VueHero {
      id: ID!
      name: String!
      image: String
      github: String
      twitter: String
    }

    input HeroInput {
      name: String!
      image: String
      github: String
      twitter: String
    }


    type Query {
      allHeroes: [VueHero]
    }

    type Mutation {
      addHero(hero: HeroInput!): VueHero!
      deleteHero(name: String!): Boolean
    } 
    `;

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
});
