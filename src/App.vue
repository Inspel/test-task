<script setup lang="ts">
import LocaleList from '@/components/LocalesList.vue'
import { ref } from 'vue'
import LocaleTable from '@/components/LocaleTable/LocaleTable.vue'
import useFetchAllLocales from '@/api/composables/useFetchAllLocales'

const { isLoading, data, error } = useFetchAllLocales()

const selectedLocale = ref<string | null>(null)

const updateSelectedLocale = (newLocale: string) => {
  selectedLocale.value = newLocale
}
</script>

<template>
  <main :class="[$style.wrapper, 'bg-grey-lighten-4']">
    <aside>
      <LocaleList
        :selectedLocale="selectedLocale"
        @update:selectedLocale="updateSelectedLocale"
        :data="data"
        :isLoading="isLoading"
        :error="error"
      />
    </aside>
    <section :class="$style.info">
      <LocaleTable :selectedLocale="selectedLocale" :disabled="!(data && data.length > 0)" />
    </section>
  </main>
</template>

<style module>
.wrapper {
  display: flex;
  margin: 0 auto;
  padding: 2rem;
  width: 100vw;
  height: 100vh;
  gap: 2rem;
}

.info {
  width: 80%;
}
</style>
