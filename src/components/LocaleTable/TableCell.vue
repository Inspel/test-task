<script setup lang="ts">
import { computed } from 'vue'

type FieldKey = 'plural_forms' | 'created_at' | 'updated_at' | 'rtl' | 'default' | 'main' | string;

type TableCellProps = {
  fieldKey: FieldKey;
  value: string[] | string | boolean | any | null;
}

const props = defineProps<TableCellProps>()

const renderedContent = computed(() => {
  if (props.value === null) return { type: 'text', value: '' }

  switch (props.fieldKey) {
    case 'plural_forms':
      return { type: 'text', value: (props.value as string[]).join(', ') }
    case 'created_at':
    case 'updated_at':
      return { type: 'text', value: new Date(props.value as string).toLocaleString() }
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
    <v-icon v-if="renderedContent.type === 'icon'" :icon="renderedContent.value" />
    <template v-else>
      {{ renderedContent.value }}
    </template>
  </td>
</template>
