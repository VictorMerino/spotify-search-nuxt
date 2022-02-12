import { getResultsFromQuery } from '@/services/queryService'
import { Result } from '@/types/Result'
import { defineStore } from 'pinia'

export const useResultsStore = defineStore('results', {
  state: () => {
    return {
      resultList: {} as Result[],
      activeResult: {} as Result
    }
  },
  actions: {
    async searchText(text: string) {
      const result = await getResultsFromQuery(text)
      this.resultList = result
    },
    setActiveResult(result: Result) {
      this.activeResult = result
    }
  }
})
