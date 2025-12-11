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
      <div class="max-w-md text-left mx-auto lg:mx-0 lg:order-1">
        <h2 class="text-3xl font-semibold text-white sm:text-4xl">MUHAMMAD LUTHFAN THAMRIN</h2>
        <h3 class ="text=2xl font-semibold text-white sm:text-3xl">11231058-Informatika-Institut Teknologi Kalimantan  </h3>

        <p class="mt-6 text-gray-200 leading-relaxed "> 
          saya adalah seroang mahasiswa infromatika angkatan 23 yang sedang menjalani semster 5 
          denagn matkul desin website dari kelas B
        </p>

        <p class="mt-4 text-gray-200 leading-relaxed">
          saya berasal dari  tanah grogot  yang terletak di suatu pulai di kalimantan Timur
          lebih tepatnay di daerah tapis
        </p>
        <p class="mt-4 text-gray-200 leading-relaxed">
          Nikmati udara segar dan keindahan alam sambil belajar tentang berbagai jenis tanaman langka dan endemik Kalimantan.
        </p>
      </div>
      <div class="relative flex justify-center lg:order-2"> 
        <img
          src="/image/Luthfan.jpg"
          alt="Foto Saya"
          class="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80
                 object-cover rounded-lg shadow-2xl ring-1 ring-white/10"
        />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto  ">

          <div 
            v-for="(item, i) in filteredItems"
            :key="i"
            class="border border-gray-200 rounded-xl shadow-md overflow-hidden bg-white cursor-pointer group"
          >
        

            <div class=" p-4 bg-gray-50 border-xl border-gray-200">
              <h3 class="text-lg font-semibold text-gray-900">
                {{ item.title }}
              </h3>
              <p class="text-sm text-gray-600 mt-1">
                {{ item.desc }}
              </p>
            </div>

          </div>

        </div>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        filter: "all",
        items: [
    
          {
    
            title: "NGODING",
            desc: "python,javascript,dan java",
            
          },
          {
            
            title: "Kantong Semar",
            desc: "Bunga berukuran besar dan langka",
            
          },
          {
        
            title: "Pohon Ulin",
            desc: "Kayu kuat khas Kalimantan",
            
          },
          
        ]
      };
    },

    computed: {
      filteredItems() {
        if (this.filter === "all") {
          return this.items;
        }

        return this.items.filter(item => item.type === this.filter);
      }
    }
  };
  </script>
