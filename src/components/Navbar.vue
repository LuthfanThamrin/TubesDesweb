<template>
  <nav class="bg-green-800 fixed w-full z-20 top-0 start-0 shadow-lg">
    <div class="max-w-full flex flex-wrap items-center justify-between mx-auto px-8 py-4">
      <router-link to="/" class="flex items-center space-x-3">
        <img src="/image/Logo.png" class="h-10" />
        <span class="text-xl text-white font-semibold">Kebun Raya Balikpapan</span>
      </router-link>

      <button
        @click="open = !open"
        type="button"
        class="md:hidden inline-flex items-center p-2 text-white"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" d="M5 7h14M5 12h14M5 17h14" />
        </svg>
      </button>

      <div :class="open ? 'block' : 'hidden'" class="w-full md:block md:w-auto">
        <ul class="font-medium flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0">
          <li><router-link to="/" class="py-2 px-3 text-white">Beranda</router-link></li>
          <li><router-link to="/tentang" class="py-2 px-3 text-white">Tentang</router-link></li>
          <li><router-link to="/galeri" class="py-2 px-3 text-white">Galeri</router-link></li>
          <li><router-link to="/tiket" class="py-2 px-3 text-white">Tiket</router-link></li>
          <li><router-link to="/contact" class="py-2 px-3 text-white">Kontak</router-link></li>
          <li><router-link to="/aboutme" class="py-2 px-3 text-white">AboutMe</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  }
}
</script>
