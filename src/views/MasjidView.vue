<script>
import NavView from "@/components/Nav.vue";
import FooterView from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "MasjidView",

  components: {
    NavView,
    FooterView,
  },

  data() {
    return {
      masjid: "",
    };
  },

  mounted() {
    this.getMasjid();
  },

  methods: {
    getMasjid() {
      axios
        .get("https://lirii.000webhostapp.com/view/viewmasjid.php")
        .then((response) => {
          if (response.data.status) {
            this.masjid = response.data.data;
          } else {
            this.$swal({
              title: "Oops...",
              text: response.data.message,
              icon: "error",
            });
          }
        })
        .catch((error) => {
          this.$swal({
            title: "Oops...",
            text: error,
            icon: "error",
          });
        });
    },
  },
};
</script>

<template>
  <NavView />
  <main>
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">Masjid</h1>
          <p class="lead text-muted">
            Sesuatu yang singkat dan terkemuka tentang koleksi di bawah ini —
            isinya, penciptanya, dll. Buatlah pendek dan manis, tetapi tidak
            terlalu pendek sehingga orang-orang tidak hanya melewatkannya
            sepenuhnya.
          </p>
        </div>
      </div>
    </section>

    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div v-for="(m, i) in masjid" :key="i" class="col">
            <div class="card shadow-sm">
              <img class="card-img-top" :src="m.img" :alt="m.nama_masjid" />
              <div class="card-title mx-1 my-1">
                <h5 class="card-title">{{ m.nama_masjid }}</h5>
              </div>
              <div class="card-body">
                <p class="card-text">
                  {{ m.deskripsi }}
                </p>
                <p class="card-text">Takmir: {{ m.takmir }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <a
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                      :href="`https://api.whatsapp.com/send?phone=6281373022132&text=Halo%2C%20saya%20ingin%20donasi%20${m.nama_masjid}`"
                      >Donasi</a
                    >
                  </div>
                  <small class="text-muted"
                    >Dibangun tahun {{ m.tahun_berdiri }}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <FooterView />
</template>
