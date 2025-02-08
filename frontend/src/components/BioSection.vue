<template>
  <section class="bg-teal-100 py-12 px-6 md:px-16 rounded-lg relative overflow-hidden">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <!-- Left Side (Title & Button) -->
      <div>
        <h2 class="text-3xl font-bold text-gray-900">
          My <br> <span class="text-black">Biography</span>
        </h2>
        <button class="mt-6 flex items-center space-x-3 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition">
          <div class="w-8 h-8 flex items-center justify-center bg-secondary rounded-full">
            <CheckIcon class="w-5 h-5 text-white" />
          </div>
          <span class="text-gray-900 font-medium">Download CV</span>
        </button>
      </div>

      <!-- Right Side (Biography Text) -->
      <div>
        <p class="text-gray-700 text-lg leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting.
        </p>
        <p class="text-gray-600 mt-4">
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
        </p>
      </div>
    </div>

    <!-- Decorative Circles -->
    <div class="absolute bottom-0 right-0 flex space-x-2">
      <div class="w-10 h-10 bg-orange-400 rounded-full"></div>
      <div class="w-16 h-16 bg-teal-600 rounded-full"></div>
    </div>
  </section>
</template>

<script setup>
import { CheckIcon } from "lucide-vue-next"; // Ensure you have this installed or replace with another icon
// import { StarIcon } from 'lucide-vue'

</script>

<style scoped>
/* Add any additional styles if needed */
</style>
