<template>
  <div class="h-screen overflow-hidden p-5">
    <!-- <div class="abc">
    hello buddy
  </div> -->
    <!-- {{ name }} -->

    <div
      data-aos="fade-up"
      v-if="visibleData.length != 0"
      class="text-center w-full -mb-14"
    >
      <h1 class="style-script-regular">
        {{ visibleData[1].food_name }}
      </h1>
      <p class="text-sm max-w-[450px] mx-auto text-center">
        {{ visibleData[1].about_food }}
      </p>
    </div>

    <div class="flex items-center gap-5 justify-between h-[100%] w-full">
      <img
        v-for="(item, index) in visibleData"
        :key="index"
        :src="`/img/${item.id}.png`"
        class="w-[350px] select-none"
        :class="{
          'scale-150': index == 1,
          'relative cursor-pointer z-[9999] -left-[10%]': index == 0,
          'relative z-50 cursor-pointer -right-[10%]': index == 2,
        }"
        :alt="item.name"
        @click="
          index == 0
            ? previous()
            : index == 2
            ? next()
            : () => {
                false;
              }
        "
        @onContextMenu="false"
      />
    </div>
    <div class="absolute bottom-[0%] z-[99] left-[40%]">
      <!-- <button @click="previous()" class="p-3 text-white bg-slate-300">previous</button>
      <button @click="next()" class="p-3 text-white bg-slate-300">next</button> -->
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    name: "saurabh",
    currentIndex: 0,
    food_data: [
      {
        id: 1,
        food_name: "Arabian Desert",
        about_food:
          "Covering the Arabian Peninsula, it includes vast sand dunes, gravel plains, and the Rub' al Khali, one of the world's largest sand deserts.",
        img: "",
      },
      {
        id: 2,
        food_name: "Namib Desert:",
        about_food:
          "Along Namibia's Atlantic coast, known for iconic red sand dunes and surreal landscapes like Deadvlei.",
        img: "",
      },
      {
        id: 3,
        food_name: "Sahara Desert",
        about_food:
          "The world's largest hot desert in North Africa, known for vast sand dunes and extreme temperatures.",
        img: "",
      },
      {
        id: 4,
        food_name: "Atacama Desert",
        about_food:
          "South America's driest desert in northern Chile, featuring unique landscapes and exceptional stargazing.",
        img: "",
      },
      {
        id: 5,
        food_name: "Gobi Desert",
        about_food:
          "A cold desert spanning China and Mongolia, with gravel plains, sand dunes, and harsh winters.",
        img: "",
      },
      {
        id: 6,
        food_name: "Mojave Desert",
        about_food:
          "Located in the southwestern U.S., famous for Joshua trees, rock formations, and temperature variations.",
        img: "",
      },
      {
        id: 7,
        food_name: "Strawberyy Synco",
        about_food:
          "At Strawberry Sync, we're passionate about delivering the freshest and most delicious strawberries to your doorstep.",
        img: "",
      },
      {
        id: 8,
        food_name: "Orange Dessert",
        about_food:
          "Experience the vibrant allure of our Orange Dessert, where zesty citrus meets velvety sweetness. With each indulgent spoonful.",
        img: "",
      },
      {
        id: 9,
        food_name: "Healthy Dessert",
        about_food:
          "Experience guilt-free indulgence with our Healthy Dessert. Each delightful bite is a testament to our commitment to wellness,",
        img: "",
      },
      {
        id: 10,
        food_name: "Mangos Synco",
        about_food:
          "Mangos Synco captures the essence of tropical bliss in every bite. Our delectable mango dessert is a celebration of sun-ripened sweetness, ",
        img: "",
      },
    ],
  }),
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % 10;
      console.log(this.currentIndex);
    },
    previous() {
      this.currentIndex = (this.currentIndex - 1 + 10) % 10;
      console.log(this.currentIndex);
    },
  },
  computed: {
    visibleData() {
      return [
        this.food_data[(this.currentIndex - 1 + 10) % 10], // Previous data item
        this.food_data[this.currentIndex], // Current data item (middle)
        this.food_data[(this.currentIndex + 1) % 10], // Next data item
      ];
    },
  },
};
</script>
