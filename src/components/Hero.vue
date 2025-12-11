<template>
<div class="relative">

  <section class="relative pt-24 pb-20">

    <div class="absolute inset-0 -z-10">
      <img 
        src="/image/KebunRaya.jpeg" 
        alt="Kebun Raya Balikpapan" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="max-w-xl mb-14">
            <h1 class="text-6xl font-extrabold text-yellow-300 drop-shadow-lg mb-3">
      Selamat Datang di Kebun Raya Balikpapan
    </h1>

        <p class="text-xl text-white drop-shadow-md mb-10 max-w-2xl leading-relaxed">
      Jelajahi keindahan hutan tropis, flora eksotis, dan suasana alami yang menenangkan.
    </p>
      </div>x

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

 
        <div class="group relative overflow-hidden rounded-xl shadow-xl cursor-pointer">
          <img 
            src="/image/BungaAnggrek.jpg" 
            alt="Anggrek Hitam" 
            class="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div class="p-4 w-full">
              <h3 class="text-lg font-semibold text-white">Anggrek Hitam</h3>
              <p class="text-sm text-gray-300 mt-1">Koleksi anggrek eksotis Kalimantan</p>
            </div>
          </div>
        </div>

        
        <div class="group relative overflow-hidden rounded-xl shadow-xl cursor-pointer">
          <img 
            src="/image/Burung2.jpg" 
            alt="Kingfisher" 
            class="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div class="p-4 w-full">
              <h3 class="text-lg font-semibold text-white">Burung Kingfisher</h3>
              <p class="text-sm text-gray-300 mt-1">Fauna endemik Kalimantan Timur</p>
            </div>
          </div>
        </div>

      
        <div class="group relative overflow-hidden rounded-xl shadow-xl cursor-pointer">
          <img 
            src="/image/Burung1.webp" 
            alt="Layang-layang" 
            class="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div class="p-4 w-full">
              <h3 class="text-lg font-semibold text-white">Burung Layang-layang</h3>
              <p class="text-sm text-gray-300 mt-1">Burung ikonik hutan tropis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>
