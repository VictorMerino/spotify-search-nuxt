<script lang="ts" setup>
import { Result } from '@/types/Result'
const props = defineProps<{
  item: Result
  layout: string
}>()
const emit = defineEmits<{
  (e: 'goToResult', id: string): void
}>()
const goToResult = () => emit('goToResult', props.item.id)
</script>

<template>
  <article class="result">
    <img v-if="item.images && item.images[2]" :src="item.images[2].url" />
    <img v-else src="/spotify_logo.png" />
    <div class="title" data-testid="title">{{ item.name }}</div>
    <span v-if="item.artists" class="text-small artist">
      {{ item.artists[0].name }}
    </span>
    <span v-if="item.total_tracks" class="text-small duration">
      {{ item.total_tracks }} tracks
    </span>
    <span v-if="layout === 'list'" class="link-to-result">
      <a href="#" @click.prevent="goToResult"> Go to result </a>
    </span>
  </article>
</template>

<style lang="scss" scoped>
$radius-full: 50px;
$radius-lite: 5px;

$breakpoints: (0px, 600px, 800px, 1000px, 1200px);
$grid-breakpoints: (
  'small' 1 nth($breakpoints, 1),
  'mid' 2 nth($breakpoints, 2),
  'large' 3 nth($breakpoints, 3),
  'extra-large' 4 nth($breakpoints, 4),
  'desktop' 5 nth($breakpoints, 5)
);

$img-size: 64px;
$radius-lite: 5px;
$radius-full: 50px;
.result {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: $radius-lite;
  margin-bottom: 1em;
  padding: 0.75em;
  gap: 0.25em;
  min-height: 80px;
  background-color: var(--bg-light);
  img {
    width: $img-size;
    height: $img-size;
    border-radius: $radius-full;
    padding: 0.5em;
  }
  .title {
    font-weight: bold;
    font-size: 1.2em;
  }
  @media (min-width: nth($breakpoints, 2)) {
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
