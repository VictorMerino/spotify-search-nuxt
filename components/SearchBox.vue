<script setup lang="ts">
const emit = defineEmits<{
  (e: 'searchText', text: string): void
}>()

const searchField = ref('')
function searchText() {
  emit('searchText', searchField.value)
}
</script>
<template>
  <section class="search-box my-4 p-4">
    <form role="search" class="search-wrapper flex">
      <input
        type="text"
        name="search"
        id="search"
        v-model="searchField"
        data-testid="search-input"
        placeholder="Search for a track, artist and/or album"
        class="search-input rounded-l-full py-2 px-6 min-w-0 flex-1 text-slate-800 focus-visible:outline-none" />
      <button
        class="search-btn rounded-r-full p-4 bg-slate-600 text-slate-50"
        data-testid="search-btn"
        @click.prevent="searchText">
        Search
      </button>
    </form>
  </section>
</template>
