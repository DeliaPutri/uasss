<script>
import axios from "axios";
import Cookies from "js-cookie";

export default {
  name: "AdminLoginView",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  mounted() {
    this.cek();
  },

  methods: {
    cek() {
      if (Cookies.get("liridonate")) {
        this.$router.push({
          name: "admin.dashboard",
        });
      }
    },

    async login(e) {
      e.preventDefault();
      await axios
        .post(
          "https://lirii.000webhostapp.com/view/login.php",
          {
            email: this.email,
            password: this.password,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          if (response.data.status) {
            Cookies.set("liridonate", JSON.stringify(response.data.data[0]));
            this.$router.push({
              name: "admin.dashboard",
            });
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
  <div class="container mt-5">
    <div class="row">
      <main class="form-signin w-100">
        <form @submit.prevent="login" method="post">
          <img
            class="mb-4"
            src="@/assets/logo.svg"
            alt="logo"
            width="72"
            height="57"
          />
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="email"
              required
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              v-model="password"
              minlength="6"
              required
            />
            <label for="floatingPassword">Password</label>
          </div>

          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p class="mt-5 mb-3 text-muted">
            &copy; 2022 - {{ new Date().getFullYear() }}
          </p>
        </form>
      </main>
    </div>
  </div>
</template>
