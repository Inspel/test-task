import type { Ref } from 'vue'
import { computed } from 'vue'
import { useFetchLocaleById } from '@/api/composables/useFetchLocaleById'

const exceptionsMap: Record<string, string> = {
  rtl: 'RTL'
}

const fieldNameToHeader = (field: string): string => {
  return (
    exceptionsMap[field] ||
    field
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  )
}

const mapDataToTableGroup = <T extends Record<string, any>>(groupInfo: T) =>
  Object.entries(groupInfo).map(([field, value]) => ({
    field: field as keyof T,
    header: fieldNameToHeader(field),
    value: value as T[keyof T]
  }))

export const useLocaleData = (selectedLocaleRef: Ref<string | null>) => {
  const { isLoading, isError, data, error, isFetched } = useFetchLocaleById(selectedLocaleRef)

  const tableData = computed(() => {
    if (!data.value) return null

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, statistics, ...generalInfo } = data.value

    return {
      generalInfoData: mapDataToTableGroup<typeof generalInfo>(generalInfo),
      statisticsData: mapDataToTableGroup<typeof statistics>(statistics)
    }
  })

  return { isLoading, isError, tableData, error, isFetched }
}
