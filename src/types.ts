import { z } from 'zod'
import { LocaleSchema, LocalesListItemSchema } from '@/schemas'

export type LocalesListItem = z.infer<typeof LocalesListItemSchema>

export type LocaleType = z.infer<typeof LocaleSchema>
