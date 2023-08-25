import { z } from 'zod'
import {
  LocaleSchema,
  LocalesListItemSchema,
  LocaleStatisticsSchema,
  UniquePluralFormsArray
} from '@/schemas'

export type PluralForms = z.infer<typeof UniquePluralFormsArray>

export type LocalesListItem = z.infer<typeof LocalesListItemSchema>

export type LocaleStatistics = z.infer<typeof LocaleStatisticsSchema>

export type LocaleType = z.infer<typeof LocaleSchema>
