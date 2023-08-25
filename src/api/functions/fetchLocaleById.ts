import { LocaleSchema } from '@/schemas'
import type { LocaleType } from '@/types'

export const fetchLocaleById = async (id: string): Promise<LocaleType> => {
  const headers = new Headers({
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
  })

  const response = await fetch(
    `https://api.phrase.com/v2/projects/${import.meta.env.VITE_PROJECT_ID}/locales/${id}`,
    {
      method: 'GET',
      headers
    }
  )

  if (!response.ok) {
    throw new Error(`Network response error: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()

  return LocaleSchema.parse(data)
}
