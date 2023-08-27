import { z } from 'zod'
import { LocaleSchema, LocalesListItemSchema } from '@/api/schemas'

export type LocalesListItemType = z.infer<typeof LocalesListItemSchema>

export type LocaleType = z.infer<typeof LocaleSchema>
