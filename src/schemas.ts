import { z } from 'zod'

export const PluralFormsSchema = z.union([
  z.literal('zero'),
  z.literal('one'),
  z.literal('two'),
  z.literal('few'),
  z.literal('many'),
  z.literal('other')
])

const UniquePluralFormsArray = z.array(PluralFormsSchema).refine(
  (data) => {
    return data.length === new Set(data).size
  },
  {
    message: 'plural_forms must contain unique values'
  }
)

const nullUnionSchema = <T>(schema: z.ZodType<T>): z.ZodUnion<[z.ZodNull, z.ZodType<T>]> =>
  z.union([z.null(), schema])

export const LocalesListItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string(),
  default: z.boolean(),
  main: z.boolean(),
  rtl: z.boolean(),
  plural_forms: UniquePluralFormsArray,
  created_at: z.string(),
  updated_at: z.string(),
  source_locale: nullUnionSchema(z.string()),
  fallback_locale: nullUnionSchema(z.string())
})

export const LocaleStatisticsSchema = z.object({
  keys_total_count: nullUnionSchema(z.number()),
  keys_untranslated_count: nullUnionSchema(z.number()),
  words_total_count: nullUnionSchema(z.number()),
  translations_completed_count: nullUnionSchema(z.number()),
  translations_unverified_count: nullUnionSchema(z.number()),
  unverified_words_count: nullUnionSchema(z.number()),
  missing_words_count: nullUnionSchema(z.number())
})

export const LocaleSchema = z.object({
  ...LocalesListItemSchema.shape,
  statistics: LocaleStatisticsSchema
})
