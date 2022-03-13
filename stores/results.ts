import { getResultsFromQuery, getSingleResult } from '@/services/queryService'
import { Result, ResultType } from '@/types/Result'
import { defineStore } from 'pinia'

export const useResultsStore = defineStore('results', {
  state: () => {
    return {
      resultList: {} as Result[],
      resultItem: {} as Result,
      activeResult: {} as Result
    }
  },
  actions: {
    async searchText(text: string) {
      const result = await getResultsFromQuery(text)
      this.resultList = result
    },
    async getSingleResult(id: string, resultType: ResultType) {
      const result = await getSingleResult(id, resultType)
      this.resultItem = result
    },
    setActiveResult(result: Result) {
      this.activeResult = result
    }
  }
})
