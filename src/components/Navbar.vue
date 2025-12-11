<template>
    
<nav class="bg-green-800 fixed w-full z-20 top-0 start-0 shadow-lg">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/image/Logo.png" class="h-10" alt="Kebun Raya Logo" />
        <span class="self-center text-xl text-white font-semibold whitespace-nowrap">Kebun Raya Balikpapan</span>
    </router-link>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-base md:hidden hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-green-600 rounded-base bg-green-600 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-green-800">
        <li>
          <router-link to="/" class="block py-2 px-3 text-white rounded md:bg-transparent md:p-0" aria-current="page">Beranda</router-link>
        </li>
        <li>
          <router-link to="/" class="block py-2 px-3 text-white rounded hover:bg-green-600 md:hover:bg-transparent md:border-0 md:hover:text-green-200 md:p-0">Tentang</router-link>
        </li>
        <li>
          <router-link to="/galeri" class="block py-2 px-3 text-white rounded hover:bg-green-600 md:hover:bg-transparent md:border-0 md:hover:text-green-200 md:p-0">Galeri</router-link>
        </li>
        <li>
          <router-link to="/" class="block py-2 px-3 text-white rounded hover:bg-green-600 md:hover:bg-transparent md:border-0 md:hover:text-green-200 md:p-0">Tiket</router-link>
        </li>
        <li>
          <router-link to="/contact" class="block py-2 px-3 text-white rounded hover:bg-green-600 md:hover:bg-transparent md:border-0 md:hover:text-green-200 md:p-0">Kontak</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>