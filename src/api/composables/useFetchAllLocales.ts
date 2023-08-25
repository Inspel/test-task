import { useQuery } from 'vue-query'
import { fetchAllLocales } from '@/api/functions/fetchAllLocales'

export default function useFetchAllLocales() {
  return useQuery('locales', () => fetchAllLocales())
}
