import { render, fireEvent } from '@testing-library/vue'
import { createTestingPinia, TestingOptions } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { describe, expect, vi } from 'vitest'

import { useResultsStore } from '@/stores/results'
import Index from '@/pages/index.vue'
import { createPinia } from 'pinia'

import { resultRaw } from '@/tests/unit/mocks/results'
import { Result } from '~~/types/Result'

vi.mock('@/stores/results.ts', () => ({
  useResultsStore: vi.fn(() => ({
    resultList: {},
    activeResult: {},
    async searchText(text: string) {
      console.log(text)
      this.resultList = resultRaw
    },
    setActiveResult(result: Result) {
      this.activeResult = result
    }
  }))
}))

describe('Index page tests', () => {
  // TO-DO: check to fix this cleaner way:
  function factory(options?: TestingOptions) {
    const wrapper = mount(Index, {
      global: {
        plugins: [createTestingPinia(options)]
      }
    })

    const resultsStore = useResultsStore()

    return { wrapper, resultsStore }
  }
  it.skip('try with factory and createPinia: with no luck', async () => {
    // const createSpy = () => vi.spyOn(useResultsStore, {})
    const { resultsStore, wrapper } = factory({
      /* createSpy */
    })

    const realPinia = createPinia()
    const storeWithRealPinia = useResultsStore(realPinia)
  })
  it('is loading', async () => {
    /*     const wrapper = mount(Index)
    console.log(wrapper.html())
    expect(wrapper.text()).toContain('Search') */

    const { getByText, getByRole } = render(Index)
    const button = getByText('Search')

    await fireEvent.click(button)

    getByRole('loading')
  })
})
