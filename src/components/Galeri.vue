  <template>
    <div class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-4">

        <div class="text-center mb-10">
          <h2 class="text-3xl font-bold text-gray-900 uppercase">
            Galeri
          </h2>
        </div>
        <div class="flex justify-center gap-3 mb-12">
          <button 
            class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-200"
            @click="filter = 'all'"
          >
            Semua
          </button>

          <button 
            class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-200"
            @click="filter = 'flora'"
          >
            Flora
          </button>

          <button 
            class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
            @click="filter = 'fauna'"
          >
            Fauna
          </button>
        </div>


        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <div 
            v-for="(item, i) in filteredItems"
            :key="i"
            class="border border-gray-200 rounded-xl shadow-md overflow-hidden bg-white cursor-pointer group"
          >
            <img 
              :src="item.image" 
              :alt="item.title" 
              class="w-full h-72 object-cover transition duration-300 group-hover:scale-110"
            />

            <div class="p-4 bg-gray-50 border-t border-gray-200">
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
  </template>


  <script>
  export default {
    data() {
      return {
        filter: "all",
        items: [
    
          {
            type: "flora",
            title: "Anggrek Hitam",
            desc: "Flora eksotis khas Kalimantan",
            image: "/image/BungaAnggrek.jpg"
          },
          {
            type: "flora",
            title: "Kantong Semar",
            desc: "Bunga berukuran besar dan langka",
            image: "/image/KantungSemar.webp"
          },
          {
            type: "flora",
            title: "Pohon Ulin",
            desc: "Kayu kuat khas Kalimantan",
            image: "/image/Pohon Ulin.jpg"
          },

          {
            type: "fauna",
            title: "Burung Kingfisher",
            desc: "Fauna endemik Kalimantan Timur",
            image: "/image/Burung2.jpg"
          },
          {
            type: "fauna",
            title: "Burung Layang-Layang",
            desc: "Burung ikonik hutan tropis",
            image: "/image/Burung1.webp"
          },
          {
            type: "fauna",
            title: "Burung Rangkong Badak",
            desc: "Primata langka penghuni hutan hujan",
            image: "/image/Burung3.webp"
          }
          
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
