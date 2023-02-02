import Head from 'next/head'
import { useRef, useState } from 'react'
import useSWRImmutable from 'swr'
import { NavBar, Welcome, Container, Error } from '../components/index'
import { GitHubAPIRes } from '@/types'
import styles from '@/styles/Home.module.css'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Home: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [searchValue, setSearchValue] = useState<string>()
  const [page, setPage] = useState<number>(0)
  const [fullQuery, setFullQuery] = useState<string>()

  const { data, error, isLoading }: GitHubAPIRes = useSWRImmutable(
    fullQuery,
    fetcher,
    {
      revalidateOnFocus: false,
    },
  )

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPage(1)
    setSearchValue(inputRef.current?.value)
    setFullQuery(`/api/github?search=${inputRef.current?.value}`)
  }

  return (
    <>
      <Head>
        <title>GitHub Searcher</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar {...{ handleSubmit, inputRef, isLoading }} />
      <main className={styles.main}>
        <Welcome {...{ searchValue }} />
        <Container {...{ data, searchValue, page, setPage, setFullQuery }} />
        <Error {...{ error }} />
      </main>
    </>
  )
}

export default Home
