import { getResultsFromQuery, getTrack } from '@/services/queryService'
import { Result } from '@/types/Result'
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
    async getTrack(trackId: string) {
      const result = await getTrack(trackId)
      this.resultItem = result
    },
    setActiveResult(result: Result) {
      this.activeResult = result
    }
  }
})
