<script setup lang="ts">
import { defineProps, computed, toRefs } from 'vue'
import { useQuery } from 'vue-query'
import { fetchLocaleById } from '@/api'
import { flattenObject } from '@/utils'

const props = defineProps<{
  selectedLocale: string | null
}>()

const { selectedLocale } = toRefs(props)

const { isLoading, isError, data, error } = useQuery(
  ['locales', selectedLocale],
  () => fetchLocaleById(selectedLocale.value!),
  {
    enabled: computed(() => !!selectedLocale.value)
  }
)

const exceptionsMap = {
  rtl: 'RTL'
}

const flattenedData = computed(() => {
  return data.value ? flattenObject(data.value) : {}
})

function fieldNameToHeader(field: string): string {
  if (exceptionsMap[field]) {
    return exceptionsMap[field]
  }

  return field
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const headers = computed(() => {
  return Object.keys(flattenedData.value).map(fieldNameToHeader)
})
</script>

<template>
  <div>
    <div v-if="isError">Error: {{ error.message }}</div>

    <div v-if="isLoading">Loading...</div>

    <div v-if="data">
      <VTable>
        <thead>
          <tr>
            <th class="text-left" v-for="header in headers" :key="header">{{ header }}</th>
          </tr>
        </thead>

        <tbody>
          <tr v-if="data">
            <td v-for="field in Object.keys(flattenedData)" :key="field">
              {{ flattenedData[field] }}
            </td>
          </tr>
        </tbody>
      </VTable>
    </div>
  </div>
</template>

<style scoped>
/* Add any required styles */
</style>
