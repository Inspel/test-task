<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ fieldKey: string; value: unknown }>()

const renderedContent = computed(() => {
  switch (props.fieldKey) {
    case 'plural_forms':
      return { type: 'text', value: (props.value as string[]).join(', ') }
    case 'created_at':
    case 'updated_at':
      return { type: 'text', value: new Date(props.value as string).toLocaleDateString() }
    case 'rtl':
    case 'default':
    case 'main':
      return (props.value as boolean)
        ? { type: 'icon', value: 'mdi-check' }
        : { type: 'icon', value: 'mdi-close' }
    default:
      return { type: 'text', value: props.value }
  }
})
</script>

<template>
  <td>
    <template v-if="renderedContent.type === 'text'">
      {{ renderedContent.value }}
    </template>
    <v-icon v-else-if="renderedContent.type === 'icon'" :icon="renderedContent.value as string" />
  </td>
</template>

<style scoped>
/* Add your styles here */
</style>
