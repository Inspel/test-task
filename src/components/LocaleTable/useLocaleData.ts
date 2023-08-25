import type { Ref } from 'vue'
import { computed } from 'vue'
import useFetchLocaleById from '@/api/composables/useFetchLocaleById'

const exceptionsMap = {
  rtl: 'RTL'
}
const fieldNameToHeader = (field: string): string => {
  return (
    exceptionsMap[field as keyof typeof exceptionsMap] ||
    field
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  )
}

const mapDataToGroup = (groupInfo: Record<string, any>) =>
  Object.entries(groupInfo).map(([field, value]) => ({
    field,
    header: fieldNameToHeader(field),
    value
  }))

export const useLocaleData = (selectedLocaleRef: Ref<string | null>) => {
  const { isLoading, isError, data, error, isFetched } = useFetchLocaleById(selectedLocaleRef)

  const tableData = computed(() => {
    if (!data.value) return null

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, statistics, ...generalInfo } = data.value

    return {
      generalInfoData: mapDataToGroup(generalInfo),
      statisticsData: mapDataToGroup(statistics)
    }
  })

  return { isLoading, isError, tableData, error, isFetched }
}
