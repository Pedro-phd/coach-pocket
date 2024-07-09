import { QueryOptions, useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface Props extends QueryOptions {
  key: string
  path: string
}

const useQueryClient = <T>({ key, path }: Props) => {
  const getData = async () => {
    const res = await axios.get(`/api${path}`)
    return res.data
  }

  const client = useQuery<{ data: T }>({ queryKey: [key], queryFn: getData })
  return client
}

export default useQueryClient
