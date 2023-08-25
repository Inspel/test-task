<script setup lang="ts">
import { defineProps, computed } from 'vue'

type FieldKeys = 'plural_forms' | 'created_at' | 'updated_at' | 'rtl' | 'default' | 'main' | string

type Values = string[] | string | number | boolean

const props = defineProps<{ fieldKey: FieldKeys; value: Values }>()

const renderedContent = computed(() => {
  switch (props.fieldKey) {
    case 'plural_forms':
      return (props.value as string[]).join(', ')
    case 'created_at':
    case 'updated_at':
      return new Date(props.value as string).toLocaleDateString()
    case 'rtl':
    case 'default':
    case 'main':
      return (props.value as boolean) ? '+' : '-'
    default:
      return props.value
  }
})
</script>

<template>
  <td>
    {{ renderedContent }}
  </td>
</template>

<style scoped>
/* Add your styles here */
</style>
