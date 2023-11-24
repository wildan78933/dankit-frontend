<script setup>
import { ref } from "vue";
import NewItemCard from "./../NewItemCard.vue";

const items = ref([
  {
    id: 1,
    titleItems: "Mobile UI Kits",
    imageItems: "items-1.jpg",
    categoriesItems: "Mobile Ui Kit",
  },
  {
    id: 2,
    titleItems: "Online Doctor Consultation",
    imageItems: "items-2.jpg",
    categoriesItems: "Website UI Kit",
  },
  {
    id: 3,
    titleItems: "Banking Crypto",
    imageItems: "items-3.jpg",
    categoriesItems: "Mobile UI Kit",
  },
]);
</script>

<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <NewItemCard
        v-for="item in items"
        :key="item.id"
        :titleItems="item.titleItems"
        :categoriesItems="item.categoriesItems"
        :imageItems="item.imageItems"
      />
    </div>
  </div>
</template>
