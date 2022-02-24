import { render, fireEvent } from '@testing-library/vue'
import { setActivePinia, createPinia } from 'pinia'

import Index from '@/pages/index.vue'
import { describe, expect } from 'vitest'

describe.skip('Index page tests', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('shows', async () => {
    render(Index)
  })
})
