<script setup lang="ts">
import { useResultsStore } from '@/stores/results'

import ResultItem from '@/components/ResultItem'

const resultStore = useResultsStore()
const resultItem = computed(() => resultStore.resultItem)
onMounted(() => {
  console.log('Mounted')
  resultStore.getTrack(useRoute().params.resultItem)
})
</script>
<template>
  <div class="container my-4">
    <ResultItem :item="resultItem.tracks[0]" />
  </div>
</template>
