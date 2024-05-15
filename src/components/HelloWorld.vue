<template>
  <div class="h-screen overflow-hidden p-5">
    <!-- <div class="abc">
    hello buddy
  </div> -->
    <!-- {{ name }} -->

    <div
      data-aos="fade-up"
     v-if="!resetAnimation"
      class="text-center w-full -mb-14"
    >
      <h1 class="style-script-regular">
        {{ food_data[currentIndex].food_name }}
        <!-- ........... current : - {{currentIndex}}
        , previous :- 
        {{previousIndex}}
        nextIndex :-
        {{nextIndex}} -->
      </h1>
      <p class="text-sm max-w-[450px] mx-auto text-center">
        {{ food_data[currentIndex].about_food }}
      </p>
    </div>

   <TransitionGroup  name="fade" tag="div"  mode="out-in" class="flex items-center gap-5 justify-between h-[100%] w-full">
      
      <img
        v-for="(item, index) in food_data"
       :data-index="index"
        :key="index"
        :src="`/img/${item.id}.png`"
        class="w-[350px] select-none rotateAnimation"
        :class="{
          'scale-150 relative left-0 ': index == currentIndex,
           'rotateAnimation !animate-spin': resetAnimation,
          'scale-150 relative  left-[38%]': index == currentIndex && previousIndex == 9,
          'scale-150  relative left-[-38%]': index == currentIndex && nextIndex == 0,
          'relative left-[60%] w-0 h-0 hidden' : index  > currentIndex && index != nextIndex,
          'relative -left-[60%] w-0 h-0 hidden' : index  < currentIndex && index != previousIndex,
          'rotate-previous relative cursor-pointer z-[9999] -left-[10%]':  index == previousIndex,
          'rotate-next relative z-50 cursor-pointer left-[10%]': index == nextIndex,
        }"
        style="transition:all 0.5s ease; "
        :alt="item.name"
        @click="
          index == (currentIndex - 1 +  food_data.length) %  food_data.length
            ? previous()
            : index == (currentIndex + 1) % food_data.length
            ? next()
            : () => {
                false;
              }
        "
        @onContextMenu="false"
      />
      
   </TransitionGroup>
  </div>
</template>
<script>
export default {
  data: () => ({
    name: "saurabh",
    previousIndex:null,
    currentIndex: 0,
    nextIndex:1,
       resetAnimation: false,
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
  mounted(){
    this.visibleData();
  },
  methods: {
    next() {
      // this.currentIndex = (this.currentIndex + 1) % 10;
      // // console.log('current',this.currentIndex, 'next', this.currentIndex + 1,'previous', this.currentIndex - 1);
      // this.visibleData()
      // console.log('next', this.nextIndex, 'previous', this.previousIndex, 'current', this.currentIndex)

       if (this.currentIndex < this.food_data.length - 1) {
        this.currentIndex++;
           this.resetAnimation = true; // Set animation flag
        setTimeout(() => {
          this.resetAnimation = false; // Reset animation flag after animation duration
        }, 500); // Adjust animation duration as needed
        this.visibleData();
      }
     
    },
    previous() {
      // this.currentIndex = (this.currentIndex - 1 + 10) % 10;
      // // console.log(this.currentIndex);
      //   //  console.log('current',this.currentIndex, 'previous', this.currentIndex + 1,'next', this.currentIndex - 1);
      //     console.log('next', this.nextIndex, 'previous', this.previousIndex, 'current', this.currentIndex)
       if (this.currentIndex > 0) {
        this.currentIndex--;
           this.resetAnimation = true; // Set animation flag
        setTimeout(() => {
          this.resetAnimation = false; // Reset animation flag after animation duration
        }, 500); // Adjust animation duration as needed
        this.visibleData();
      }
    },
    visibleData(){
       
       this.previousIndex =  (this.currentIndex - 1 + 10) % 10 // Previous data item
        // this.currentIndex, // Current data item (middle)
       this.nextIndex =  (this.currentIndex + 1) % 10 // Next data item
    },
  },
};
</script>
<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity:
   0
}
.rotateAnimation{
  animation: rotateImg 1s;
}
@keyframes rotateImg {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>