import { screen, render } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import App from '@/pages/index.vue'
import { describe, expect, vi } from 'vitest'

// process.env.ENV_VARIABLE = ''
const customRender = () => {
  const storeObj = () => ({
    modules: {
      // exampleStore: cloneDeep(exampleStore)
    }
  })
  return render(App, {
    global: {
      // plugins: [createStore(storeObj()), router]
    }
  })
}

global.fetch = vi.fn(id =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        id: 1,
        name: `bulbasaur${id}`,
        order: 1,
        types: [
          {
            type: {
              name: 'grass'
            }
          },
          {
            type: {
              name: 'poison'
            }
          }
        ],
        sprites: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
        }
      })
  })
)

describe('First test', () => {
  expect(true).toBe(true)
})
