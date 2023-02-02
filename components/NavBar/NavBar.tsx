import styles from '@/styles/NavBar.module.css'
import { NavBarProps } from '@/types'
import { BarLoader } from 'react-spinners'

export const NavBar: React.FC<NavBarProps> = ({
  handleSubmit,
  inputRef,
  isLoading,
}: NavBarProps) => {
  return (
    <>
      <div className={styles.navBar}>
        <img src="/github.svg" alt="next" className={styles.icon} />
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            ref={inputRef}
            type="search"
            placeholder="Search a GitHub repository..."
          />
        </form>
      </div>
      {isLoading && <BarLoader color="#6599ee" style={{ width: '100%' }} />}
    </>
  )
}
