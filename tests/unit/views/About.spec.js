import { render, fireEvent } from '@testing-library/vue'
import About from '@/pages/about/index.vue'
import { describe, expect } from 'vitest'

describe('About page tests', () => {
  expect(true).toBe(true)
  it('shows', async () => {
    const ELEMENT_TEXT = 'About'

    const { getByText } = render(About)
    const mainDiv = getByText(ELEMENT_TEXT)

    await fireEvent.click(mainDiv)

    getByText(ELEMENT_TEXT)
  })
})
