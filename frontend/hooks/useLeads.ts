import useSWR from 'swr'
import axios from 'axios'

export interface Lead {
  id: number
  name?: string
  email?: string
  message: string
  createdAt: string
}

const fetcher = (url: string) => axios.get<Lead[]>(url).then(r => r.data)

export function useLeads() {
  const { data, error, mutate } = useSWR<Lead[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/leads`,
    fetcher
  )
  return {
    leads: data || [],
    isLoading: !error && !data,
    isError: !!error,
    mutate
  }
}
