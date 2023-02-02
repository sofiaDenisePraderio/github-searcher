import { ItemProps } from '@/types'
import styles from '@/styles/Item.module.css'
import { ItemDetails } from '../index'

export const Item: React.FC<ItemProps> = ({
  description,
  name,
  primaryLanguage,
  stargazerCount,
  isLastItem = false,
}: ItemProps) => {
  return (
    <div className={styles.item}>
      <p className={styles.name}>{name}</p>
      <p className={styles.description}>{description}</p>
      <ItemDetails
        primaryLanguage={primaryLanguage}
        stargazerCount={stargazerCount}
      />
      {!isLastItem && <div className={styles.separator} />}
    </div>
  )
}
