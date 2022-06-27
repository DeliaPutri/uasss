<script>
import NavAdmin from "@/components/NavAdmin.vue";
import axios from "axios";
import Cookies from "js-cookie";

export default {
  name: "AdminDashboardView",

  data() {
    return {
      masjid: 0,
      donasi: 0,
    };
  },

  components: {
    NavAdmin,
  },

  mounted() {
    this.cek();
  },

  methods: {
    cek() {
      if (!Cookies.get("liridonate")) {
        this.$router.push({
          name: "admin.login",
        });
      } else {
        axios
          .get("https://lirii.000webhostapp.com/view/viewcount.php")
          .then((response) => {
            if (response.data.status) {
              this.masjid = response.data.data.masjid;
              this.donasi = response.data.data.donasi;
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
      }
    },
  },
};
</script>

<template>
  <NavAdmin />
  <main class="container mt-5 pt-5">
    <div class="row d-flex justify-content-evenly">
      <div class="card mb-3" style="max-width: 250px">
        <div class="row g-0">
          <div class="col-md-4 text-center">
            <h1>{{ masjid }}</h1>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title text-center">Masjid</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style="max-width: 250px">
        <div class="row g-0">
          <div class="col-md-4 text-center">
            <h1>{{ donasi }}</h1>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title text-center">Donasi</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
