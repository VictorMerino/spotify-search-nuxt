<template>
  <footer class="p-4 bg-black">
    <div class="container flex justify-between items-center">
      <div class="flex">
        <span class="text-xl hidden md:block">Footer</span>
      </div>
      <div class="footer-right flex items-center justify-between">
        {{ new Date().getFullYear() }}
      </div>
    </div>
  </footer>
</template>
