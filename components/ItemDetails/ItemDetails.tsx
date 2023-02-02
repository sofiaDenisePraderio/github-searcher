import { ItemDetailsProps } from '@/types'
import styles from '@/styles/Item.module.css'
import { ItemLanguage } from '../ItemLanguage/ItemLanguage'

export const ItemDetails: React.FC<ItemDetailsProps> = ({
  primaryLanguage,
  stargazerCount,
}: ItemDetailsProps) => {
  return (
    <div className={styles.detailsContainer}>
      <p className={styles.details}>☆ {stargazerCount}</p>
      <ItemLanguage primaryLanguage={primaryLanguage} />
    </div>
  )
}
