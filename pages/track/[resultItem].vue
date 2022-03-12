<script setup lang="ts">
import { useResultsStore } from '@/stores/results'

const resultStore = useResultsStore()
const resultItem = computed(() => resultStore.resultItem)
onMounted(() => {
  console.log('Mounted')
  resultStore.getTrack(useRoute().params.resultItem)
})
</script>
<template>
  <div class="container">
    <pre>{{ resultItem }}</pre>
  </div>
</template>
