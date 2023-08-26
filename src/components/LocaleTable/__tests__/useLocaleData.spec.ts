import { ref } from 'vue'
import { describe, it, expect, afterEach, vi } from 'vitest'
import type { MockedFunction } from 'vitest'
import { useLocaleData } from '@/components/LocaleTable/useLocaleData'
import useFetchLocaleById from '@/api/composables/useFetchLocaleById'
import { localeFixture, tableDataFixture } from './fixtures'

vi.mock('@/api/composables/useFetchLocaleById')
const mockedFetchComposable = useFetchLocaleById as MockedFunction<typeof useFetchLocaleById>
describe('useLocaleData', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('maps the fetched locale data to tableData', async () => {
    // Mock the data returned by `useFetchLocaleById`
    mockedFetchComposable.mockReturnValue({
      isLoading: ref(false),
      isError: ref(false),
      data: ref(localeFixture) as any,
      error: ref(null),
      isFetched: ref(true)
    })

    // Use the composable
    const { tableData } = useLocaleData(ref('b48a061d4897365f19e6cce1caff4025'))

    expect(tableData.value).toEqual(tableDataFixture)
  })

  it('handles error states correctly', async () => {
    mockedFetchComposable.mockReturnValue({
      isLoading: ref(false),
      isError: ref(true),
      data: ref(undefined),
      error: ref(new Error('Failed to fetch data.')),
      isFetched: ref(true)
    })

    const { tableData, isError, error } = useLocaleData(ref('b48a061d4897365f19e6cce1caff4025'))

    expect(isError.value).toBe(true)
    expect(error.value).toEqual(new Error('Failed to fetch data.'))
    expect(tableData.value).toBeNull()
  })

  it('handles loading state correctly', async () => {
    mockedFetchComposable.mockReturnValue({
      isLoading: ref(true),
      isError: ref(false),
      data: ref(undefined),
      error: ref(null),
      isFetched: ref(false)
    })

    const { isLoading } = useLocaleData(ref('b48a061d4897365f19e6cce1caff4025'))

    expect(isLoading.value).toBe(true)
  })

  it('handles no data state correctly', async () => {
    mockedFetchComposable.mockReturnValue({
      isLoading: ref(false),
      isError: ref(false),
      data: ref(undefined),
      error: ref(null),
      isFetched: ref(true)
    })

    const { tableData } = useLocaleData(ref('b48a061d4897365f19e6cce1caff4025'))

    expect(tableData.value).toBeNull()
  })
})
