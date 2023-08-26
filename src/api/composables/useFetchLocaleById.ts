import type { Ref } from 'vue'
import { useQuery } from 'vue-query'
import { fetchLocaleById } from '@/api/functions/fetchLocaleById'
import { computed } from 'vue'
import type { LocaleType } from '@/types'

export default function useFetchLocaleById(selectedLocaleRef: Ref<string | null>) {
  const queryKey = computed(() => selectedLocaleRef.value)

  const { isLoading, isError, data, error, isFetched } = useQuery<LocaleType, Error>(
    ['locales', queryKey],
    () => fetchLocaleById(selectedLocaleRef.value!),
    {
      enabled: computed(() => !!selectedLocaleRef.value)
    }
  )

  return { isLoading, isError, data, error, isFetched }
}
