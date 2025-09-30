// frontend/hooks/useProjects.ts
import useSWR from 'swr'
import axios from 'axios'

export type Project = {
  id: number
  title: string
  description: string
  slug: string
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

const fetcher = (url: string) =>
  axios.get<Project[]>(url).then(res => res.data)

export function useProjects() {
  const { data, error, mutate } = useSWR<Project[]>(
    `${API_URL}/projects`,
    fetcher
  )
  return {
    projects: data || [],
    isLoading: !error && !data,
    isError: !!error,
    mutate,
  }
}
