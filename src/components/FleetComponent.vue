<script setup>
import {ref} from "vue";
let id = 0
const fleetImages = ref([
  {
    id: id++,
    name: "Hawks Javaahiru",
    img1: "/src/assets/img/Javaahiru-1.webp",
    img2: "/src/assets/img/Javaahiru-2.webp",
    features:[
      {
        name: "Year built",
        amount: 2000
      },
      {
        name: "Cargo Capacity",
        amount: "5.5 Million liters"
      }
    ]
  },
  {
    id: id++,
    name: "Hawks Javaahiru 2",
    img1: "/src/assets/img/Javaahiru-1.webp",
    img2: "/src/assets/img/Javaahiru-2.webp",
    features:[
      {
        name: "Year built",
        amount: 2000
      },
      {
        name: "Cargo Capacity2",
        amount: "5.5 Million liters2"
      }
    ]
  },
])
let isHover = ref({});

for (let i = 1; i <= fleetImages.length; i++) {
  isHover.value[i] = false;
}
function onMouseEnter(index){
  console.log("mouse enter", isHover.value[index])
  isHover.value[index] = true
}
function onMouseLeave(index){
  console.log("mouse leave", isHover.value[index])
  isHover.value[index] = false
}

</script>

<template>
  <div id="fleet" style="margin-top: 110px">
    <div class="section-title" data-aos="fade-down">
      <h2>Fleet</h2>
    </div>
    <div class="row">
      <div class="flex h-full flex-col">
        <div class="group" v-for="image in fleetImages" :key="image.id">
          <div class="h-96">
            <p class="flex justify-center text-xl font-bold transition-all duration-700 ease-in-out group-hover:text-[#EFB00F]">
            {{ image.name }}
            </p>
            <div class="">
              <div @mouseover="onMouseEnter(image.id)" @mouseleave="onMouseLeave(image.id)" class="flex justify-center">
                <!--black-->
                <img  :src="image.img1"
                     class="absolute transition-all duration-500 opacity-100 ease-in-out"
                      :class="{'opacity-100': isHover[image.id], 'opacity-0': !isHover[id]}"
                />
                <img  :src="image.img2"
                     class="absolute transition-all duration-500 opacity-0 ease-in-out"
                      :class="{'opacity-100': !isHover[image.id], 'opacity-0': isHover[image.id]}"
                />
              </div>
            </div>
            <div class="flex justify-center">
              <div class="grid translate-y-32 grid-cols-3 justify-center gap-10 gap-y-4 transition-all duration-700
              ease-in-out sm:flex sm:gap-10 md:translate-y-24 md:gap-20 md:opacity-0 md:group-hover:translate-y-36
              md:group-hover:opacity-100">
                <div v-for="item in image.features" :key="item.id" class="flex flex-col gap-y-2">
                  <h1 class="text-center text-xs text-[#707070]">{{ item.name }}</h1>
                  <p class="text-center text-xs">{{ item.amount }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>