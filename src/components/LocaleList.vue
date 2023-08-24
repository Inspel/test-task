<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { useQuery } from 'vue-query'
import { fetchLocalesList } from '@/api'

const { selectedLocale } = defineProps<{
  selectedLocale: string | null
}>()

const emit = defineEmits(['update:selectedLocale'])

const { isLoading, isError, data, error } = useQuery('fetchLocalesList', fetchLocalesList)

const changeLocale = (newLocale: string) => {
  emit('update:selectedLocale', newLocale)
}
</script>

<template>
  <v-card width="300">
    <v-list v-if="data && data.length">
      <v-list-item
        v-for="locale in data"
        :key="locale.id"
        @click="changeLocale(locale.id)"
        :active="locale.id === selectedLocale"
      >
        <v-list-item-title>{{ locale.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <div v-if="isLoading">Loading...</div>
    <div v-if="isError">Error loading data: {{ error }}</div>
  </v-card>
</template>

<style scoped></style>
