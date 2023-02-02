import { request, gql } from 'graphql-request'
import type { NextApiRequest, NextApiResponse } from 'next'

const query = gql`
  query search($search: String!, $pagination: String) {
    search(query: $search, type: REPOSITORY, after: $pagination, first: 10) {
      nodes {
        ... on Repository {
          id
          name
          description
          createdAt
          primaryLanguage {
            color
            name
          }
          stargazerCount
        }
      }
      repositoryCount
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const endpoint = 'https://api.github.com/graphql' // use the env var
  const { search, pagination } = req.query // api/github?search=react

  if (!search)
    return res.status(400).json({ message: 'oops! something went wrong..' })
  const result = await request(
    endpoint,
    query,
    { search, pagination },
    { authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}` },
  )

  res.send(result)
}
