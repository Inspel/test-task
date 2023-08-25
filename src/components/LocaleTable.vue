<script setup lang="ts">
import { defineProps, computed, toRefs } from 'vue'
import { useQuery } from 'vue-query'
import { fetchLocaleById } from '@/api'
import TableCell from '@/components/TableCell.vue'

const props = defineProps<{
  selectedLocale: string | null
}>()

const { selectedLocale } = toRefs(props)

const { isLoading, isError, data, error, isFetched } = useQuery(
  ['locales', selectedLocale],
  () => fetchLocaleById(selectedLocale.value!),
  {
    enabled: computed(() => !!selectedLocale.value)
  }
)

const exceptionsMap = {
  rtl: 'RTL'
}

function fieldNameToHeader(field: string): string {
  if (exceptionsMap[field]) {
    return exceptionsMap[field]
  }

  return field
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const tableData = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, statistics, ...generalInfo } = data.value
  const fullData = { ...generalInfo, ...statistics }

  const computeGroupData = (info: Record<string, any>) => {
    return Object.keys(info).map((field) => ({
      field,
      header: fieldNameToHeader(field),
      value: fullData[field]
    }))
  }

  return {
    fullData,
    generalInfoData: computeGroupData(generalInfo),
    statisticsData: computeGroupData(statistics)
  }
})
</script>

<template>
  <VCard :class="$style.wrapper" :loading="isLoading">
    <div v-if="isError" :class="$style.status">Error loading locale: {{ error.message }}</div>
    <div v-else-if="!isFetched" :class="$style.status">Select a locale</div>

    <div v-else-if="data">
      <VTable>
        <tbody>
          <tr v-for="item in tableData.generalInfoData" :key="item.field">
            <td :class="$style.tableHeader">{{ item.header }}</td>
            <TableCell :field-key="item.field" :value="item.value" />
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td colspan="2" class="text-center" :class="[$style.tableHeader]">Statistics</td>
          </tr>
          <tr v-for="item in tableData.statisticsData" :key="item.field">
            <td :class="$style.tableHeader">{{ item.header }}</td>
            <TableCell :field-key="item.field" :value="item.value" />
          </tr>
        </tbody>
      </VTable>
    </div>
  </VCard>
</template>

<style module>
.wrapper {
  position: relative;
  width: 100%;
  max-width: 768px;
  min-height: 320px;
  max-height: 100%;
  overflow: auto;
}

.tableHeader {
  font-weight: bold;
}

.status {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
