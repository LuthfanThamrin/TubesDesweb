<template>
<div class="bg-green-700 py-24 sm:py-32">
  <div class="mx-auto max-w-4xl px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold tracking-tight text-white">Tiket Masuk</h2>
      <p class="mt-4 text-lg text-gray-100">Informasi harga tiket masuk Kebun Raya Balikpapan</p>
    </div>
    
    <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
      <h3 class="text-2xl font-bold text-gray-900 mb-8">Harga Tiket</h3>
      
      <div class="overflow-hidden rounded-lg border border-gray-200">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-green-50">
            <tr>
              <th scope="col" class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Kategori</th>
              <th scope="col" class="px-6 py-4 text-right text-sm font-semibold text-gray-900">Harga</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white">
            <tr class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 text-sm text-gray-900">Dewasa (Lokal)</td>
              <td class="px-6 py-4 text-sm text-gray-900 text-right font-medium">Rp 15.000</td>
            </tr>
            <tr class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 text-sm text-gray-900">Anak-anak (Lokal)</td>
              <td class="px-6 py-4 text-sm text-gray-900 text-right font-medium">Rp 12.000</td>
            </tr>
            <tr class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 text-sm text-gray-900">Pengunjung terjadwal</td>
              <td class="px-6 py-4 text-sm text-gray-900 text-right font-medium">Rp 10.000</td>
            </tr>
            <tr class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 text-sm text-gray-900">Wisatawan Asing (WNA)</td>
              <td class="px-6 py-4 text-sm text-gray-900 text-right font-medium">Rp 30.000</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p class="text-sm text-gray-600 text-center mt-6 italic">
        *Harga sudah termasuk akses ke semua area kebun raya
      </p>
      
      <div class="mt-8 flex justify-center">
        <a
          href="https://wa.me/6282225333318?text=Halo%20Kebun%20Raya%20Balikpapan.%0ASaya%20ingin%20memesan%20tiket%20masuk.%0A%0A--%20Data%20Pengunjung%20--%0ANama%3A%20%0AJumlah%20Tiket%3A%20%0AKategori%20Tiket%3A%20(Dewasa/Anak/Pengunjung%20Terjadwal/WNA)%0AWaktu%20Kunjungan%3A%20%0A%0ATerima%20kasih."
          target="_blank"
          class="rounded-md bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-green-500 transition-colors"
        >
          Pesan Tiket Sekarang
        </a>

      </div>
    </div>
  </div>
</div>
</template>