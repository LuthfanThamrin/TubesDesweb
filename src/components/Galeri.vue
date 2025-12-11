<template>
<div class="bg-gradient-to-b from-green-700 to-green-800 py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center mb-16">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase">Galeri</h2>
    </div>
    
    <div class="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    
      <div class="group relative overflow-hidden rounded-lg shadow-xl cursor-pointer">
        <img 
          src="/image/BungaAnggrek.jpg" 
          alt="Anggrek" 
          class="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div class="p-6 w-full">
            <h3 class="text-xl font-semibold text-white">Anggrek Hitam</h3>
            <p class="text-sm text-gray-300 mt-2">Koleksi anggrek eksotis Kalimantan</p>
          </div>
        </div>
      </div>

    
      <div class="group relative overflow-hidden rounded-lg shadow-xl cursor-pointer">
        <img 
          src="/image/Burung2.jpg" 
          alt="Burung" 
          class="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div class="p-6 w-full">
            <h3 class="text-xl font-semibold text-white">Burung Kingfisher</h3>
            <p class="text-sm text-gray-300 mt-2">Fauna endemik Kalimantan Timur</p>
          </div>
        </div>
      </div>

      <div class="group relative overflow-hidden rounded-lg shadow-xl cursor-pointer">
        <img 
          src="/image/Burung1.webp" 
          alt="Rangkong" 
          class="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div class="p-6 w-full">
            <h3 class="text-xl font-semibold text-white">Burung layang layang</h3>
            <p class="text-sm text-gray-300 mt-2">Burung ikonik hutan tropis</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>