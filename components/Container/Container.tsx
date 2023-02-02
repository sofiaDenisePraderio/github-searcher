import { ContainerProps } from '@/types'
import { SearchTitle, Items, Pagination } from '../index'

export const Container: React.FC<ContainerProps> = ({
  data,
  searchValue,
  page,
  setPage,
  setFullQuery,
}: ContainerProps) => {
  const { nodes, repositoryCount } = data?.search || []
  return (
    <>
      <SearchTitle {...{ searchValue, repositoryCount }} />
      {nodes?.length >= 1 ? <Items repos={nodes} /> : null}
      {nodes?.length >= 1 ? (
        <Pagination
          {...{ searchValue, page, setPage, setFullQuery }}
          pageInfo={data?.search?.pageInfo}
        />
      ) : null}
    </>
  )
}
