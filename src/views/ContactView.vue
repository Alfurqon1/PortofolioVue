<script>
export default {
  name: "ContactView",
  components: {},
  data: () => ({
    title: "Contact",
    data: [],
    input: {
      name: "",
      email: "",
      message: "",
    },
  }),
  methods: {
    async submit() {
      const data = new FormData();
      Object.keys(this.input).forEach((key) =>
        data.append(key, this.input[key])
      );
      await fetch("https://formspree.io/f/mdojlnee", {
        method: "POST",
        body: data,
      });
      this.reset();
      // this.data.push({ ...this.input });
      // this.reset();
    },
    logEmits(event) {
      console.log("formEmits", event);
    },
  },
  watch: {
    "input.name"(val) {
      console.log("input name has changed to", val);
    },
  },
};
</script>
<template>
  <section class="py-5 bg-light">
    <div class="container message">
      <div class="row contact-row g-0">
        <div class="col-lg-5">
          <img src="../assets/message.jpg" class="img-fluid" alt="" />
        </div>
        <div class="col m-auto mt-2">
          <h1 class="text-center">Send me a Message</h1>
          <form @submit.prevent="submit" @reset="reset" class="form">
            <div class="mb-3">
              <label for="name" class="form-label">Nama</label>
              <input
                v-model="input.name"
                type="text"
                class="form-control"
                name="name"
                aria-describedby="name"
              />
            </div>
            <div class="mb-3">
              <label for="InputEmail" class="form-label">Email</label>
              <input
                v-model="input.email"
                type="email"
                class="form-control"
                name="email"
              />
            </div>
            <div class="mb-3">
              <label for="InputMessage" class="form-label">Message</label>
              <input
                v-model="input.message"
                class="form-control"
                name="message"
                cols="3"
              />
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.contact-row {
  background: white;
  border-radius: 30px;
  box-shadow: 12px 12px 22px;
}
.message img {
  border-radius: 30px;
}
.form {
  margin: 20px;
}
</style>
