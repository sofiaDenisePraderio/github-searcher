import { WelcomeProps } from '@/types'
import styles from '@/styles/Welcome.module.css'

export const Welcome: React.FC<WelcomeProps> = ({
  searchValue,
}: WelcomeProps) => (
  <>
    {!searchValue ? (
      <>
        <div className={styles.welcome}>
          <div className={styles.hi}>Hi!</div>
          <div>
            <h1 className={styles.title}>Welcome to the</h1>
            <h1 className={styles.title}>GitHub Searcher App</h1>
          </div>
        </div>
        <div className={styles.text}>
          Here you can find all the public repositories shared in the GitHub
          database :)
        </div>
      </>
    ) : null}
  </>
)
