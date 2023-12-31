import type { LocalesListItemType } from '@/types'
import { LocalesListItemSchema } from '@/api/schemas'
import { z } from 'zod'

export const fetchAllLocales = async (): Promise<LocalesListItemType[]> => {
  const headers = new Headers({
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
  })

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/projects/${import.meta.env.VITE_PROJECT_ID}/locales`,
    {
      method: 'GET',
      headers
    }
  )

  if (!response.ok) {
    throw new Error(`Network response error: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()

  return z.array(LocalesListItemSchema).parse(data)
}
