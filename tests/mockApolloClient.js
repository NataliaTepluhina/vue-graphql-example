import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from '../apollo-server/type-defs';
import resolvers from './mockResolvers';

const cache = new InMemoryCache();

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
});

export default new ApolloClient({
  link: new SchemaLink({ schema: executableSchema }),
  cache,
});
