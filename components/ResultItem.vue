<script lang="ts" setup>
import { Result } from '@/types/Result'
const props = defineProps<{
  item: Result
  layout: string
}>()

const { goToResult } = inject('singleResultProvider', () => null)
const getValues = () => {
  goToResult({ id: props.item.id, type: props.item.type })
}
</script>

<template>
  <article class="result sm:text-center">
    <img v-if="item.images && item.images[2]" :src="item.images[2].url" />
    <img v-else src="/spotify_logo.png" />
    <div class="title" data-testid="title" :title="item.name">
      {{ item.name }}
    </div>
    <span v-if="item.artists" class="text-small artist">
      {{ item.artists[0].name }}
    </span>
    <span v-if="item.total_tracks" class="text-small duration">
      {{ item.total_tracks }} tracks
    </span>
    <span
      v-if="layout === 'list'"
      class="link-to-result sm:block"
      style="grid-column: span 3">
      <a href="#" @click.prevent="getValues"> Go to result --> </a>
    </span>
  </article>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/common.scss';
$img-size: 80px;
.result {
  @media (max-width: nth(common.$breakpoints, 2)) {
    @supports (display: grid) {
      display: grid;
      grid-template-columns: repeat(6, minmax(auto, 4em));
      grid-template-rows: 1fr 1fr;
      overflow: hidden;
      img {
        grid-column: 1/3;
        grid-row: 1/3;
      }
      .title {
        grid-column: 3/7;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .artist,
      .duration {
        grid-column: span 2;
      }
    }
  }

  @media (min-width: nth(common.$breakpoints, 2)) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
  }
  border-radius: var(--radius-lite);
  margin-bottom: 1em;
  padding: 0.75em;
  gap: 0.25em;
  min-height: 80px;
  @apply bg-slate-700;
  img {
    border-radius: var(--radius-full);
    padding: 0.5em;
    width: $img-size;
    height: $img-size;
  }
  .title {
    font-weight: bold;
    font-size: 1.2em;
  }
  @media (min-width: nth(common.$breakpoints, 2)) {
    height: auto;
    flex-direction: column;
    flex: 1;
    flex-shrink: 0;
  }
}
.text-small {
  padding: 0.3em;
  font-size: 0.8em;
}
</style>
