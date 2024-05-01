<template>
<div>

  <div class="bg-black abc">
    hello buddy
  </div>
  <img v-for="(i) in 7" :key="i" :src="`/img/${i}.png`" alt="">
</div>
</template>