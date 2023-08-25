<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { useQuery } from 'vue-query'
import { fetchAllLocales } from '@/api'

const { selectedLocale } = defineProps<{
  selectedLocale: string | null
}>()

const { isLoading, isError, data, error } = useQuery('locales', fetchAllLocales)

const emit = defineEmits(['update:selectedLocale'])
const changeLocale = (newLocale: string) => {
  emit('update:selectedLocale', newLocale)
}
</script>

<template>
  <VCard :class="$style.wrapper">
    <div v-if="isLoading" :class="$style.status">
      <VProgressCircular indeterminate />
    </div>
    <div v-if="isError">Error loading locales: {{ error.message }}</div>
    <VList v-if="data && data.length">
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
