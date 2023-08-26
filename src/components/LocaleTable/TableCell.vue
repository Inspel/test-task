<script setup lang="ts">
import { computed } from 'vue'

type PluralFormsField = {
  fieldKey: 'plural_forms'
  value: string[] | null
}

type DateField = {
  fieldKey: 'created_at' | 'updated_at'
  value: string | null
}

type BooleanField = {
  fieldKey: 'rtl' | 'default' | 'main'
  value: boolean | null
}

type DefaultCellProps = {
  fieldKey: string
  value: any
}

type TableCellProps = PluralFormsField | DateField | BooleanField | DefaultCellProps

const props = defineProps<TableCellProps>()

const renderedContent = computed(() => {
  if (props.value === null) return { type: 'text', value: '' }

  switch (props.fieldKey) {
    case 'plural_forms':
      return { type: 'text', value: props.value.join(', ') }
    case 'created_at':
    case 'updated_at':
      return { type: 'text', value: new Date(props.value).toLocaleString() }
    case 'rtl':
    case 'default':
    case 'main':
      return props.value
        ? { type: 'icon', value: 'mdi-check' }
        : { type: 'icon', value: 'mdi-close' }
    default:
      return { type: 'text', value: String(props.value) }
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
