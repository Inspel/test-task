<script setup lang="ts">
import { toRefs } from 'vue'
import TableCell from '@/components/LocaleTable/TableCell.vue'
import { useLocaleData } from './useLocaleData'

const props = defineProps<{
  selectedLocale: string | null
  disabled: boolean
}>()

const { selectedLocale } = toRefs(props)
const { isLoading, tableData, error, isFetched } = useLocaleData(selectedLocale)
</script>

<template>
  <VCard :class="$style.wrapper" :loading="isLoading">
    <template v-if="isLoading">
      <div :class="$style.status">Loading...</div>
    </template>
    <template v-else-if="!isFetched">
      <div :class="[$style.status, disabled ? $style.disabled : '']">Select a locale</div>
    </template>
    <template v-else-if="tableData">
      <VTable data-cy="table">
        <tbody>
          <tr v-for="item in tableData.generalInfoData" :key="item.field">
            <td :class="$style.tableHeader">{{ item.header }}</td>
            <TableCell :field-key="item.field" :value="item.value" />
          </tr>
        </tbody>
        <tbody v-if="tableData.statisticsData">
          <tr>
            <td colspan="2" class="text-center" :class="[$style.tableHeader]">Statistics</td>
          </tr>
          <tr v-for="item in tableData.statisticsData" :key="item.field">
            <td :class="$style.tableHeader">{{ item.header }}</td>
            <TableCell :field-key="item.field" :value="item.value" />
          </tr>
        </tbody>
      </VTable>
    </template>
    <template v-else>
      <div :class="$style.status">
        Error loading locale{{ !!error ? `: ${error.message}` : '' }}
      </div>
    </template>
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

.disabled {
  opacity: var(--v-disabled-opacity);
}
</style>
