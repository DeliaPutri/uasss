<script>
import NavAdmin from "@/components/NavAdmin.vue";
import axios from "axios";
import Cookies from "js-cookie";

export default {
  name: "AdminMasjidView",

  data() {
    return {
      masjid: [],
      nama: "",
      tahun: 0,
      takmir: "",
      keterangan: "",
      img: "",
      edit: {
        nama: "",
        tahun: 0,
        takmir: "",
        keterangan: "",
        img: "",
      },
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
      }
    },

    upload(event) {
      this.img = event.target.files[0].name;
    },

    uploadEdit(event) {
      this.edit.img = event.target.files[0].name;
    },

    tambah(e) {
      e.preventDefault();
      axios
        .post(
          "https://lirii.000webhostapp.com/view/tambahmasjid.php",
          {
            nama_masjid: this.nama,
            tahun_berdiri: this.tahun,
            deskripsi: this.keterangan,
            takmir: this.takmir,
            img: this.img,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          if (response.data.status) {
            this.$swal({
              title: "Berhasil",
              text: response.data.message,
              icon: "success",
            });
            document.getElementById("close").click();
            this.nama = "";
            this.tahun = "";
            this.keterangan = "";
            this.takmir = "";
            this.img = "";
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

    ubah(id) {
      //   axios.get("/api/masjid/" + id).then((response) => {
      //     this.edit.nama = response.data.nama;
      //     this.edit.alamat = response.data.alamat;
      //     this.edit.keterangan = response.data.keterangan;
      //   });
      document.getElementById("ed").click();
    },

    update(e) {
      e.preventDefault();
      //   axios
      //     .post("/api/masjid", {
      //       nama: this.edit.nama,
      //       alamat: this.edit.alamat,
      //       keterangan: this.edit.keterangan,
      //       foto: this.edit.foto,
      //     })
      //     .then((response) => {
      //       if (response.data.success) {
      //         this.$swal({
      //           title: "Berhasil",
      //           text: response.data.message,
      //           icon: "success",
      //         });
      //         this.nama = "";
      //         this.alamat = "";
      //         this.keterangan = "";
      //         this.foto = "";
      //       } else {
      //         this.$swal({
      //           title: "Oops...",
      //           text: response.data.message,
      //           icon: "error",
      //         });
      //       }
      //     })
      //     .catch((error) => {
      //       this.$swal({
      //         title: "Oops...",
      //         text: error,
      //         icon: "error",
      //       });
      //     });
    },

    hapus(id) {
      this.$swal({
        title: "Apakah anda yakin?",
        text: "Data yang dihapus tidak dapat dikembalikan!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, hapus!",
      });
      //   .then((result) => {
      //     if (result.isConfirmed) {
      //   axios
      //     .delete("/api/masjid/" + id)
      //     .then((response) => {
      //       if (response.data.success) {
      //         this.$swal({
      //           title: "Berhasil!",
      //           text: "Data berhasil dihapus!",
      //           icon: "success",
      //         });
      //         this.$router.go(this.$router.currentRoute);
      //       } else {
      //         this.$swal({
      //           title: "Oops...",
      //           text: response.data.message,
      //           icon: "error",
      //         });
      //       }
      // })
      // .catch((error) => {
      //   this.$swal({
      //     title: "Oops...",
      //     text: error,
      //     icon: "error",
      //   });
      // });
      //     }
      //   });
    },
  },
};
</script>

<template>
  <NavAdmin />
  <main class="container mt-5 pt-5">
    <div class="row">
      <button
        class="btn btn-primary"
        style="max-width: 100px"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#tambah"
      >
        Tambah
      </button>

      <!-- Modal Tambah -->
      <div
        class="modal fade"
        id="tambah"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Tambah Masjid</h5>
              <button
                id="close"
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                @submit.prevent="tambah"
                method="post"
                enctype="multipart/form-data"
              >
                <div class="form-floating my-1">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="masjid shobirin"
                    v-model="nama"
                    required
                  />
                  <label for="floatingInput my-1">Nama</label>
                </div>
                <div class="form-floating">
                  <input
                    type="number"
                    class="form-control"
                    id="floatingTahun"
                    placeholder="1212"
                    v-model="tahun"
                    required
                  />
                  <label for="floatingTahun">Tahun berdiri</label>
                </div>
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingTakmir"
                    placeholder="Faris"
                    v-model="takmir"
                    required
                  />
                  <label for="floatingTakmir">Takmir</label>
                </div>
                <input
                  type="file"
                  class="form-control my-1"
                  id="inputGroupFile01"
                  @change="upload($event)"
                  required
                />
                <div class="form-floating my-1">
                  <textarea
                    class="form-control"
                    placeholder="Keterangan"
                    id="floatingTextarea"
                    v-model="keterangan"
                    required
                  ></textarea>
                  <label for="floatingTextarea">Keterangan</label>
                </div>

                <button class="w-100 btn btn-lg btn-primary" type="submit">
                  Save
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Edit -->
      <div
        class="modal fade"
        id="edit"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Edit Masjid</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                @submit.prevent="update"
                method="post"
                enctype="multipart/form-data"
              >
                <div class="form-floating my-1">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="masjid shobirin"
                    v-model="edit.nama"
                    required
                  />
                  <label for="floatingInput my-1">Nama</label>
                </div>
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingAlamat"
                    placeholder="Jalan jalan"
                    v-model="edit.alamat"
                    required
                  />
                  <label for="floatingAlamat">Alamat</label>
                </div>
                <input
                  type="file"
                  class="form-control my-1"
                  id="inputGroupFile01"
                  @change="uploadEdit($e)"
                  required
                />
                <div class="form-floating my-1">
                  <textarea
                    class="form-control"
                    placeholder="Keterangan"
                    id="floatingTextarea"
                    v-model="edit.keterangan"
                  ></textarea>
                  <label for="floatingTextarea">Keterangan</label>
                </div>

                <button class="w-100 btn btn-lg btn-primary" type="submit">
                  Save
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nama</th>
            <th scope="col">Tahun</th>
            <th scope="col">Takmir</th>
            <th class="text-center" scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(m, i) in masjid" :key="i">
            <td>{{ m.nama_masjid }}</td>
            <td>{{ m.tahun_berdiri }}</td>
            <td>{{ m.takmir }}</td>
            <td class="d-flex justify-content-evenly">
              <button
                id="ed"
                class="btn btn-warning btn-sm"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#edit"
                hidden
              >
                Edit
              </button>
              <button
                class="btn btn-warning btn-sm"
                type="button"
                @click="ubah(m.id_masjid)"
              >
                Edit
              </button>
              <button
                class="btn btn-danger btn-sm"
                type="button"
                @click="hapus(m.id_masjid)"
              >
                Hapus
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
