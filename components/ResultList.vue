<script lang="ts" setup>
import ResultItem from './ResultItem.vue'

const props = defineProps<{ resultRaw }>()
</script>

<template>
  <section class="result-list">
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

<style lang="scss" scoped>
h2 {
  margin-top: 1em;
  margin-bottom: 0.5em;
}

$breakpoints: (0px, 600px, 800px, 1000px, 1200px);
$grid-breakpoints: (
  'small' 1 nth($breakpoints, 1),
  'mid' 2 nth($breakpoints, 2),
  'large' 3 nth($breakpoints, 3),
  'extra-large' 4 nth($breakpoints, 4),
  'desktop' 5 nth($breakpoints, 5)
);
.grid-10 {
  gap: 1em;
  display: grid;

  @each $name, $i, $width in $grid-breakpoints {
    @media screen and (min-width: $width) {
      grid-template-columns: repeat($i, 1fr);
    }
  }
}
</style>
