import { defineStore } from "pinia";

const ImageStore = defineStore({
  id: "image",
  state: () => ({
    list: [
      {
        slug: "Web Portofolio Pribadi",
        title: "Web Portofolio pribadi",
        img: "project_1.png",
        description:
          "Ini merupakan web portofolio tentang data diri. Jika ingin melihatnya...",
        link: "https://alfurqon1.github.io/Basic-website-myprofile/",
      },
      {
        slug: "Web Portofolio Travel",
        title: "Web portofolio Travel",
        img: "project_2.jpg",
        description:
          "Ini merupakan web portofolio tentang Travel. Jika ingin melihatnya...",
        link: "https://alfurqon1.github.io/TravelWeb/",
      },
      {
        slug: "Desain Web coffee ",
        title: "Desain Web Coffee ",
        img: "project_3.jpg",
        description:
          "Ini merupakan Desain web portofolio dengan figma. Jika ingin melihatnya...",
        link: "https://www.figma.com/file/zyZ1dl2Fn5cbccxXLINZqh/ID.COFFEE?node-id=0%3A1",
      },
    ],
  }),
  actions: {},
  getters: {
    g$list: ({ list }) => list,
    g$detail: ({ list }) => {
      return (slug) => list.find((image) => image.slug == slug);
    },
  },
});
export default ImageStore;
