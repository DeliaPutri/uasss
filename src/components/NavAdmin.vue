<script>
import Cookies from "js-cookie";

export default {
  name: "NavAdmin",

  data() {
    return {
      user: "",
    };
  },

  mounted() {
    this.cek();
  },

  methods: {
    cek() {
      if (Cookies.get("liridonate")) {
        this.user = JSON.parse(Cookies.get("liridonate"));
      }
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-light fixed-top bg-primary">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <a class="navbar-brand text-white" href="#">Admin</a>
      <div
        id="offcanvasNavbar"
        class="offcanvas offcanvas-start"
        tabindex="-1"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header text-white bg-primary">
          <img src="@/assets/logo.svg" width="100" alt="logo" />
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div class="offcanvas-body sidebar-menu bg-primary">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 menu">
            <li
              class="nav-item sidebar-item"
              :class="{ active: $route.name == 'admin.dashboard' }"
            >
              <router-link
                :to="{ name: 'admin.dashboard' }"
                class="nav-link sidebar-link text-white px-1"
                style="font-weight: bold"
                aria-current="page"
              >
                <span>Dashboard</span>
              </router-link>
            </li>
            <li
              class="nav-item sidebar-item mt-1"
              :class="{ active: $route.name == 'admin.masjid' }"
            >
              <router-link
                :to="{ name: 'admin.masjid' }"
                class="nav-link sidebar-link text-white px-1"
                style="font-weight: bold"
                aria-current="page"
              >
                <span>Masjid</span>
              </router-link>
            </li>
            <li
              class="nav-item sidebar-item mt-1"
              :class="{ active: $route.name == 'admin.donasi' }"
            >
              <router-link
                :to="{ name: 'admin.donasi' }"
                class="nav-link sidebar-link text-white px-1"
                style="font-weight: bold"
                aria-current="page"
              >
                <span>Donasi</span>
              </router-link>
            </li>
            <li class="nav-item sidebar-item mt-1 bg-danger">
              <a
                class="nav-link sidebar-link text-white px-1"
                style="font-weight: bold; cursor: pointer"
                @click="handleSignOut"
              >
                <span>Keluar</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
a {
  text-decoration: none;
}
.nav-item:hover {
  background-color: white !important;
}
.nav-link:hover {
  color: blue !important;
}
.active {
  background-color: white !important;
}
.active .nav-link {
  color: blue !important;
}
.menu {
  font-weight: 600;
  margin-top: 2rem;
  padding: 0 2rem;
}
.menu .sidebar-item {
  list-style: none;
  margin-top: 0.5rem;
  position: relative;
}
.menu .sidebar-link {
  align-items: center;
  border-radius: 0.5rem;
  color: #25396f;
  display: block;
  display: flex;
  font-size: 1rem;
  padding: 0.7rem 1rem;
  text-decoration: none;
  transition: all 0.5s;
}
.menu .sidebar-link span {
  margin-left: 1rem;
}
.menu .submenu {
  display: none;
  list-style: none;
  overflow: hidden;
  transition: max-height 2s cubic-bezier(0, 0.55, 0.45, 1);
}
.menu .submenu .submenu-item a {
  color: #25396f;
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 0.7rem 2rem;
  transition: all 0.3s;
}
</style>
