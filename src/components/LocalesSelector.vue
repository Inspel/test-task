<script setup lang="ts">
import type { LocalesListItemType } from '@/types'

const { selectedLocale, data, error } = defineProps<{
  selectedLocale: string | null
  isLoading: boolean
  error: Error | null
  data?: Array<LocalesListItemType>
}>()

const emit = defineEmits(['update:selectedLocale'])
const changeLocale = (newLocale: string) => {
  emit('update:selectedLocale', newLocale)
}
</script>

<template>
  <VCard :class="$style.wrapper">
    <template v-if="isLoading">
      <div :class="$style.status">
        <VProgressCircular indeterminate />
      </div>
    </template>
    <template v-else-if="data && data.length">
      <VList>
        <VListItem
          v-for="locale in data"
          :key="locale.id"
          @click="changeLocale(locale.id)"
          :active="locale.id === selectedLocale"
          :class="$style.item"
        >
          <v-list-item-title>{{ locale.name }}</v-list-item-title>
        </VListItem>
      </VList>
    </template>
    <template v-else>
      <div>Error loading locales{{ !!error ? `: ${error.message}` : '' }}</div>
    </template>
  </VCard>
</template>

<style module>
.wrapper {
  position: relative;
  width: 70px;
  min-height: 100px;
}

.status {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.item {
  text-align: center;
}
</style>
