<script setup lang="ts">
import { useResultsStore } from '@/stores/results'
import ResultItem from '@/components/ResultItem.vue'

const routerParams = useRoute().params
const resultStore = useResultsStore()
const resultItem = computed(() => resultStore.resultItem)

onMounted(() => {
  resultStore.getSingleResult(routerParams.id, routerParams.type)
})
</script>
<template>
  <div class="container my-4">
    <NuxtLink
      to="/"
      class="m-4 p-2 bg-slate-100 border border-slate-200 rounded-md text-slate-800 inline-block">
      |\ Back to search
    </NuxtLink>
    <ResultItem v-if="resultItem" :item="resultItem" layout="single-result" />
  </div>
</template>
