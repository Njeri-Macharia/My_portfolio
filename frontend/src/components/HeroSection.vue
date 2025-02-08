<template>
  <section class="pt-20 pb-20 px-4 bg-teal-100">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <!-- Left Content -->
      <div class="md:w-1/2 mb-10 md:mb-0">
        <h2 class="text-secondary text-3xl font-semibold">Hello, I'm Mercy Macharia</h2>
        <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Professional
          <span class="text-teal-600">Mobile Developer</span>
          & Data Science Enthusiast
        </h1>
        <p class="text-gray-600 mb-8 text-lg">
          Creating beautiful and functional digital experiences that help businesses grow
        </p>
        <div class="flex space-x-4">
          <button class="bg-secondary text-white px-8 py-3 rounded-full hover:bg-primary">
            Hire Me
          </button>
          <button class="bg-primary border-2 border-primary text-white px-8 py-3 rounded-full hover:bg-secondary hover:border-secondary">
            View Portfolio
          </button>
        </div>
      </div>

      <!-- Right Image -->
      <div class="md:w-1/2 flex justify-center">
        <img :src="profileImage" alt="Professional portrait" class="object-cover max-w-lg mx-auto rounded-full shadow-lg">
      </div>
    </div>
  </section>
</template>

<script setup>
const profileImage = "/images/profile.png"
</script>
