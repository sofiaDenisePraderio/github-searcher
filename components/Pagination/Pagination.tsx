import { PaginationProps } from '@/types'
import styles from '@/styles/Pagination.module.css'

export const Pagination: React.FC<PaginationProps> = ({
  searchValue,
  page,
  setPage,
  setFullQuery,
  pageInfo,
}: PaginationProps) => {
  const { startCursor, endCursor, hasNextPage } = pageInfo || {}
  const handlePagination = (actualPage: number, cursor: string) => {
    setPage(actualPage)
    setFullQuery(`/api/github?search=${searchValue}&pagination=${cursor}`)
  }

  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        onClick={() => handlePagination(page - 1, startCursor)}
        disabled={page === 1}
      >
        {`< previous`}
      </button>
      <div className={styles.number}>{page}</div>
      <button
        className={styles.button}
        onClick={() => handlePagination(page + 1, endCursor)}
        disabled={!hasNextPage}
      >
        {`next >`}
      </button>
    </div>
  )
}
