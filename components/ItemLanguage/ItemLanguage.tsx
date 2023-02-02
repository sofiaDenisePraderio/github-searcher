import { ItemLanguageProps } from '@/types'
import styles from '@/styles/Item.module.css'

export const ItemLanguage: React.FC<ItemLanguageProps> = ({
  primaryLanguage,
}: ItemLanguageProps) => (
  <div className={styles.flex}>
    <div
      style={{ backgroundColor: primaryLanguage?.color }}
      className={styles.lenguageCircle}
    />
    <p className={styles.details}>{primaryLanguage?.name}</p>
  </div>
)
