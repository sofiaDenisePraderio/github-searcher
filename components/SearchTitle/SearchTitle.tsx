import { SearchTitleProps } from '@/types'
import styles from '@/styles/SearchTitle.module.css'

export const SearchTitle: React.FC<SearchTitleProps> = ({
  searchValue,
  repositoryCount,
}: SearchTitleProps) => {
  return (
    <>
      {searchValue ? (
        <div className={styles.searchTitle}>
          <h1 className={styles.title}>{searchValue?.toUpperCase()}</h1>
          {repositoryCount === 0 ? (
            <h4 className={styles.subtitle}>
              We couldn't find the repo, try something else please...
            </h4>
          ) : (
            <h4 className={styles.subtitle}>
              {repositoryCount >= 1
                ? `${repositoryCount?.toLocaleString()} repository results`
                : ''}
            </h4>
          )}
        </div>
      ) : null}
    </>
  )
}
