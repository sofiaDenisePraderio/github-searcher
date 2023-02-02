import { Item } from '../index'
import { ItemsProps, Repository } from '@/types'

export const Items: React.FC<ItemsProps> = ({ repos }: ItemsProps) => (
  <>
    {repos?.map((repo: Repository, index: number) => {
      return (
        <Item key={repo.id} isLastItem={repos.length === index + 1} {...repo} />
      )
    })}
  </>
)
