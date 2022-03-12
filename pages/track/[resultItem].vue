<script setup lang="ts">
import { useResultsStore } from '@/stores/results'

import ResultItem from '@/components/ResultItem'

const resultStore = useResultsStore()
const resultItem = computed(() => resultStore.resultItem)
onMounted(() => {
  resultStore.getTrack(useRoute().params.resultItem)
})
</script>
<template>
  <div class="container my-4">
    <ResultItem
      v-if="resultItem && resultItem.tracks"
      :item="resultItem.tracks[0]"
      layout="single-result" />
  </div>
</template>
