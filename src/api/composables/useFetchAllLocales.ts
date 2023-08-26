import { useQuery } from 'vue-query'
import { fetchAllLocales } from '@/api/functions/fetchAllLocales'
import type { LocalesListItem } from '@/types'

export default function useFetchAllLocales() {
  return useQuery<LocalesListItem[], Error>('locales', () => fetchAllLocales())
}
