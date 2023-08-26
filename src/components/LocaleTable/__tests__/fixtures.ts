export const localeFixture = {
  id: 'b48a061d4897365f19e6cce1caff4025',
  name: 'en',
  code: 'en',
  default: true,
  main: false,
  rtl: false,
  plural_forms: ['zero', 'one', 'other'],
  created_at: '2023-02-16T15:14:15Z',
  updated_at: '2023-02-16T15:14:27Z',
  statistics: {
    keys_total_count: 18,
    keys_untranslated_count: 0,
    words_total_count: 23,
    translations_completed_count: 18,
    translations_unverified_count: 0,
    unverified_words_count: 0,
    missing_words_count: null
  },
  source_locale: null,
  fallback_locale: null
}

export const tableDataFixture = {
  generalInfoData: [
    { field: 'name', header: 'Name', value: 'en' },
    { field: 'code', header: 'Code', value: 'en' },
    { field: 'default', header: 'Default', value: true },
    { field: 'main', header: 'Main', value: false },
    { field: 'rtl', header: 'RTL', value: false },
    { field: 'plural_forms', header: 'Plural Forms', value: ['zero', 'one', 'other'] },
    { field: 'created_at', header: 'Created At', value: '2023-02-16T15:14:15Z' },
    { field: 'updated_at', header: 'Updated At', value: '2023-02-16T15:14:27Z' },
    { field: 'source_locale', header: 'Source Locale', value: null },
    { field: 'fallback_locale', header: 'Fallback Locale', value: null }
  ],
  statisticsData: [
    { field: 'keys_total_count', header: 'Keys Total Count', value: 18 },
    { field: 'keys_untranslated_count', header: 'Keys Untranslated Count', value: 0 },
    { field: 'words_total_count', header: 'Words Total Count', value: 23 },
    {
      field: 'translations_completed_count',
      header: 'Translations Completed Count',
      value: 18
    },
    {
      field: 'translations_unverified_count',
      header: 'Translations Unverified Count',
      value: 0
    },
    { field: 'unverified_words_count', header: 'Unverified Words Count', value: 0 },
    { field: 'missing_words_count', header: 'Missing Words Count', value: null }
  ]
}
