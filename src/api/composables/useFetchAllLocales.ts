import { useQuery } from 'vue-query'
import { fetchAllLocales } from '@/api/functions/fetchAllLocales'
import type { LocalesListItemType } from '@/types'

export const useFetchAllLocales = () => {
  return useQuery<LocalesListItemType[], Error>('locales', () => fetchAllLocales())
}
