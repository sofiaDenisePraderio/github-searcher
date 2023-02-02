import { Dispatch, RefObject, SetStateAction } from 'react'
import { FormEventHandler } from 'react'

type SetPage = Dispatch<SetStateAction<number>>
type SetFullQuery = Dispatch<SetStateAction<string | undefined>>
type StringState = string | undefined

type Id = 'id'
type StargazerCount = 'stargazerCount'

export interface WelcomeProps {
  searchValue: StringState
}

export interface ErrorProps {
  error: StringState
}

export interface GitHubAPIRes {
  data: GitHubData
  error: StringState
  isLoading: boolean
}

export interface GitHubData {
  search: {
    nodes: Repository[]
    pageInfo: PageInfo
    repositoryCount: number
  }
}

export interface PageInfo {
  endCursor: string
  startCursor: string
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export interface PrimaryLenguage {
  color: string
  name: string
}

export interface Repository {
  createdAt: string
  description: string
  id: string
  name: string
  primaryLanguage: PrimaryLenguage
  stargazerCount: number
}

export interface ContainerProps {
  data: GitHubData
  searchValue: StringState
  page: number
  setPage: SetPage
  setFullQuery: SetFullQuery
}

export interface SearchTitleProps {
  searchValue: StringState
  repositoryCount: number
}

export interface ItemsProps {
  repos: Repository[]
}

export interface ItemProps extends Omit<Repository, Id> {
  isLastItem: boolean
}

export interface ItemDetailsProps {
  primaryLanguage: PrimaryLenguage
  stargazerCount: number
}

export interface ItemLanguageProps
  extends Omit<ItemDetailsProps, StargazerCount> {}

export interface NavBarProps {
  handleSubmit: FormEventHandler<HTMLFormElement>
  inputRef: RefObject<HTMLInputElement>
  isLoading: boolean
}

export interface PaginationProps {
  searchValue: StringState
  page: number
  setPage: SetPage
  setFullQuery: SetFullQuery
  pageInfo: PageInfo
}
