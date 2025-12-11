<template>
<div class="bg-gradient-to-b from-slate-900 to-green-900">
  <div class="mx-auto max-w-7xl py-40 px-4 sm:px-6 lg:px-6">

    <div
      class="relative isolate overflow-hidden
      bg-gradient-to-br from-green-900 via-green-800 to-emerald-900
      px-6 pt-12 pb-12 sm:rounded-3xl shadow-2xl
      flex flex-col lg:flex-row items-center gap-10 lg:gap-20
      lg:py-20 lg:px-20">">
      <svg viewBox="0 0 1024 1024" aria-hidden="true"
           class="absolute top-1/2 left-1/2 -z-10 w-64 h-64
           -translate-x-1/2 -translate-y-1/2
           sm:left-full sm:-ml-80
           lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0">
        <defs>
          <radialGradient id="grad">
            <stop stop-color="#065f46"/>
            <stop offset="1" stop-color="#14532d"/>
          </radialGradient>
        </defs>
      </svg>
      <div class="max-w-md text-left mx-auto lg:mx-0 lg:order-2">
        <h2 class="text-3xl font-semibold text-white sm:text-4xl">Tentang Kami</h2>

        <p class="mt-6 text-gray-200 leading-relaxed "> 
          Kebun Raya Balikpapan merupakan kebun raya pertama yang dibangun setelah Indonesia merdeka.
          Terletak di Kota Balikpapan, Kalimantan Timur, kebun raya ini memiliki luas 309 hektar
          dan menjadi pusat konservasi tumbuhan tropika dataran rendah.
        </p>

        <p class="mt-4 text-gray-200 leading-relaxed">
          Dengan koleksi lebih dari 1.700 jenis tumbuhan, kebun raya ini tidak hanya berfungsi sebagai
          tempat wisata, tetapi juga pusat penelitian, pendidikan, dan konservasi keanekaragaman hayati Indonesia.
        </p>
        <p class="mt-4 text-gray-200 leading-relaxed">
          Nikmati udara segar dan keindahan alam sambil belajar tentang berbagai jenis tanaman langka dan endemik Kalimantan.
        </p>
      </div>
      <div class="relative flex justify-center lg:order-1"> 
        <img
          src="/image/Burung1.webp"
          alt="Burung Kebun Raya"
          class="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80
                 object-cover rounded-lg shadow-2xl ring-1 ring-white/10"
        />
      </div>

    </div>
  </div>
</div>
</template>
