<script setup lang="ts">
import LocaleList from '@/components/LocaleList.vue'
import { ref } from 'vue'
import LocaleTable from '@/components/LocaleTable.vue'

const selectedLocale = ref<string | null>(null)

const updateSelectedLocale = (newLocale: string) => {
  selectedLocale.value = newLocale
}
</script>

<template>
  <main class="wrapper">
    <aside>
      <LocaleList :selectedLocale="selectedLocale" @update:selectedLocale="updateSelectedLocale" />
    </aside>
    <section>
      <LocaleTable :selectedLocale="selectedLocale" />
    </section>
  </main>
</template>

<style scoped></style>
