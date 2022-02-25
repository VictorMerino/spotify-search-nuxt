import { render, fireEvent } from '@testing-library/vue'
import { createTestingPinia, TestingOptions } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { describe, expect, vi } from 'vitest'

import { useResultsStore } from '@/stores/results'
import Index from '@/pages/index.vue'
import { createPinia } from 'pinia'

describe.skip('Index page tests', () => {
  function factory(options?: TestingOptions) {
    const wrapper = mount(Index, {
      global: {
        plugins: [createTestingPinia(options)]
      }
    })

    const resultsStore = useResultsStore()

    return { wrapper, resultsStore }
  }
  it('shows', async () => {
    const createSpy = () => vi.spyOn(useResultsStore, {})
    const { resultsStore, wrapper } = factory({ createSpy })

    const realPinia = createPinia()
    const storeWithRealPinia = useResultsStore(realPinia)
  })
})
