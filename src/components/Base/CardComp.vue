<script>
import ImageComp from "./ImageComp.vue";
export default {
  name: "CardComp",
  props: {
    data: Object,
  },
  components: {
    ImageComp,
  },
};
</script>
<template>
  <div class="container p-5 mt-5">
    <div class="row">
      <!-- Project 1 -->
      <div class="col-md text-center">
        <div class="card mt-4">
          <ImageComp :src="data.img" />
          <div class="card-body">
            <h5>{{ data.title }}</h5>

            <a
              href="https://alfurqon1.github.io/Basic-website-myprofile/"
              class="btn btn-outline-primary"
              >Lihat disini</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
