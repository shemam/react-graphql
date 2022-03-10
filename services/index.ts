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


export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails () {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        feature {
          url
        }
        createdAt
        slug
      }
    }
  `;

  if (graphqlAPI) {
    const result = await request(graphqlAPI, query);
    return result.posts;
  }
};

export const getSimilarPost = async () => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories } } }, last: 3) {
        title
        feature {
          url
        }
        createdAt
        slug
      }
    }
  `;
  if (graphqlAPI) {
    const result = await request(graphqlAPI, query);
    return result.posts;
  }
};


export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;

  if (graphqlAPI) {
    const result = await request(graphqlAPI, query);
    return result.categories;
  }
};

 