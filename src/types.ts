import { z } from 'zod'
import {
  LocaleSchema,
  LocalesListItemSchema,
  LocaleStatisticsSchema,
  PluralFormsSchema
} from '@/schemas'

export type PluralForms = z.infer<typeof PluralFormsSchema>

export type LocalesListItem = z.infer<typeof LocalesListItemSchema>

export type LocaleStatistics = z.infer<typeof LocaleStatisticsSchema>

export type Locale = z.infer<typeof LocaleSchema>
