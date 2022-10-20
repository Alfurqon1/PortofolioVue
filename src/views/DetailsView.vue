<script>
import imageStore from "@/stores/image";
import ImageComp from "@/components/Base/ImageComp.vue";

import { mapState } from "pinia";
export default {
  name: "DetailView",
  components: {
    ImageComp,
  },
  computed: {
    ...mapState(imageStore, ["g$detail"]),
    detail() {
      return this.g$detail(this.$route.params.id);
    },
  },
};
</script>

<template>
  <div class="card m-auto mt-5" style="width: 20rem">
    <ImageComp :src="detail.img" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ detail.title }}</h5>
      <p class="card-text">
        {{ detail.description }}
      </p>
      <a :href="detail.link" class="btn btn-primary">Klik Disini</a>
    </div>
  </div>
</template>

<style>
.card-title {
  margin-bottom: 10px;
}
</style>
