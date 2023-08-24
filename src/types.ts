export type PluralForms = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other'

export type LocalesListItem = {
  id: 'string'
  name: 'string'
  code: 'string'
  default: boolean
  main: boolean
  rtl: boolean
  plural_forms: PluralForms[]
  created_at: string
  updated_at: string
  source_locale: string | null
  fallback_locale: string | null
}

export type LocaleStatistics = {
  keys_total_count: number
  keys_untranslated_count: number
  words_total_count: number
  translations_completed_count: number
  translations_unverified_count: number
  unverified_words_count: number
  missing_words_count: number
}
