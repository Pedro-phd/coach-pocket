import {
  QueryOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import axios from 'axios'

interface Props extends QueryOptions {
  invalidateKey?: string
  path: string
  method: 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  body?: unknown
}

const useMutationClient = ({ invalidateKey, path, method = 'POST' }: Props) => {
  const queryClient = useQueryClient()

  const client = useMutation({
    mutationFn: (b) => {
      return axios({
        method,
        url: `/api${path}`,
        data: b,
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [invalidateKey] })
    },
  })
  return client
}

export default useMutationClient
