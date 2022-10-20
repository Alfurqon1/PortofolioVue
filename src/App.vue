<script setup>
import NavbarItem from "./components/NavbarItem.vue";
import { RouterView } from "vue-router";
import FooterItem from "./components/FooterItem.vue";
</script>

<template>
  <NavbarItem />
  <RouterView />
  <FooterItem />
</template>

<style scope></style>
