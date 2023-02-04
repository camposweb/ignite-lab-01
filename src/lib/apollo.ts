import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cldqh1yfx2vzk01um0kkl22kg/master',
  cache: new InMemoryCache(),
})