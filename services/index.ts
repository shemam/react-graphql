import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              name
              id
              bio
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            feature {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `
  if (graphqlAPI) {
    const results = await request(graphqlAPI, query)
    return results.postsConnection.edges
  }
}
