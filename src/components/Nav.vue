<script>
export default {
  name: "NavView",
};
</script>

<template>
  <header class="d-flex justify-content-center py-3">
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link
          class="nav-link"
          :class="{ active: $route.name == 'home' }"
          :to="{ name: 'home' }"
        >
          Home
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :class="{ active: $route.name == 'masjid' }"
          :to="{ name: 'masjid' }"
        >
          Masjid
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :class="{ active: $route.name == 'about' }"
          :to="{ name: 'about' }"
        >
          About
        </router-link>
      </li>
    </ul>
  </header>
</template>
