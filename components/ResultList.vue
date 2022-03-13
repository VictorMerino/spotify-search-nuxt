<script lang="ts" setup>
import ResultItem from './ResultItem.vue'

defineProps<{ resultRaw }>()
const emit = defineEmits<{
  (e: 'goToResult', id: string, type: string): void
}>()

const goToResult = (id: string, type: string) => {
  emit('goToResult', id, type)
}
</script>

<template>
  <section class="result-list px-2 sm:px-4">
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
            :layout="'list'"
            @go-to-result="goToResult" />
        </div>
        <div v-else data-testid="no-result-msg">No {{ name }} found</div>
      </template>
    </template>
    <template v-else>
      Please, use the above input to search for any result
    </template>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/common.scss';
h2 {
  margin-top: 1em;
  margin-bottom: 0.5em;
}

.grid-10 {
  gap: 1em;
  display: grid;

  @each $name, $i, $width in common.$grid-breakpoints {
    @media screen and (min-width: $width) {
      grid-template-columns: repeat($i, 1fr);
    }
  }
}
</style>
