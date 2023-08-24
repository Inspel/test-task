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
  <VCard width="300">
    <VList v-if="data && data.length">
      <VListItem
        v-for="locale in data"
        :key="locale.id"
        @click="changeLocale(locale.id)"
        :active="locale.id === selectedLocale"
      >
        <v-list-item-title>{{ locale.name }}</v-list-item-title>
      </VListItem>
    </VList>
    <div v-if="isLoading">Loading...</div>
    <div v-if="isError">Error loading data: {{ error }}</div>
  </VCard>
</template>

<style scoped></style>
