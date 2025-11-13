<template>
<div class="bg-gray-50 pb-24">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="overflow-hidden rounded-lg bg-white shadow-lg border border-gray-200">
      <div class="lg:grid lg:grid-cols-2">
        <div class="p-8 lg:p-12">
          <h3 class="text-2xl font-bold text-gray-900">Lihat Lokasi di Google Maps</h3>
          <p class="mt-4 text-gray-600">Dapatkan petunjuk arah menuju Kebun Raya Balikpapan</p>
          <div class="mt-8">
            <a href="https://maps.app.goo.gl/vD6p2ckG2MkuM7b47" target="_blank" class="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-500">
              Buka Maps
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>
        <div class="h-96 lg:h-auto">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0333989057413!2d116.85542701063777!3d-1.1365309988477903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149298f826ab5%3A0xc8c509df2f71cdca!2sKebun%20Raya%20Balikpapan!5e0!3m2!1sid!2sid!4v1763051354661!5m2!1sid!2sid" 
            class="h-full w-full" 
            style="border:0;" 
            allowfullscreen
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</div>
</template>