<script lang="ts" setup>
import ResultItem from './ResultItem.vue'
const props = defineProps<{ resultRaw }>()
</script>

<template>
  <section class="result-list container">
    <template v-if="Object.entries(resultRaw).length">
      <template v-for="(resultType, name, index) in resultRaw" :key="index">
        <h2>{{ name }}</h2>
        <hr />
        <div
          class="grid-10"
          data-testid="results-wrapper"
          v-if="Object.entries(resultType.items).length">
          <ResultItem
            v-for="(item, index) in resultType.items"
            :key="`${item.type}-${index}`"
            :item="item"
            :layout="'list'" />
        </div>
        <div v-else data-testid="no-result-msg">No {{ name }} found</div>
      </template>
    </template>
    <template v-else>
      Please, use the above input to search for any result
    </template>
  </section>
</template>
