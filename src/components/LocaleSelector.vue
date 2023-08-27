<script setup lang="ts">
import type { LocalesListItemType } from '@/types'

const { selectedLocale, data } = defineProps<{
  selectedLocale: string | null
  isLoading: boolean
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
          <VListItemTitle>{{ locale.name }}</VListItemTitle>
        </VListItem>
      </VList>
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
