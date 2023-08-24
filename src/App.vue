<script setup lang="ts">
import LocaleList from '@/components/LocaleList.vue'

import { ref } from 'vue'
import LocaleTable from '@/components/LocaleTable.vue'

const selectedLocale = ref<string | null>(null)

const setSelectedLocale = (locale: string | null) => {
  selectedLocale.value = locale
}
</script>

<template>
  <header></header>

  <main>
    <aside>
      <LocaleList setSelectedLocale="setSelectedLocale" />
    </aside>
    <LocaleTable selectedLocale="selectedLocale" />
  </main>
</template>

<style scoped></style>
