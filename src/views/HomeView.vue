<script>
import BaseCard from "@/components/Base/CardComp.vue";
import BaseProfile from "@/components/Base/ProfileComp.vue";
import ImageStore from "@/stores/image";
import { mapState } from "pinia";
export default {
  name: "HomePage",
  components: {
    BaseProfile,
    BaseCard,
  },
  computed: {
    ...mapState(ImageStore, ["g$list"]),
  },
};
</script>

<template>
  <BaseProfile />
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3">
      <template v-for="(img, index) in g$list" :key="index">
        <RouterLink :to="{ name: 'details', params: { id: img.slug } }">
          <BaseCard :data="img" />
        </RouterLink>
      </template>
    </div>
  </div>
</template>
