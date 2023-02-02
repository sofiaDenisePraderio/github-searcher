import { ErrorProps } from '@/types'

export const Error: React.FC<ErrorProps> = ({ error }: ErrorProps) =>
  error ? (
    <h2>Opps! Something wents wrong, please refresh the page...</h2>
  ) : null
