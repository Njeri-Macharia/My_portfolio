<template>
  <header class="fixed top-0 w-full z-50 bg-primary text-white shadow-md">
    <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo and Branding -->
      <a href="#" class="flex items-center text-2xl font-bold">
        <img :src="logo" alt="Logo" class="h-10 mr-2" /> Portfolio
      </a>

      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-8">
        <a href="#home" class="hover:opacity-80">Home</a>
        <a href="#about" class="hover:opacity-80">About Me</a>
        <a href="#services" class="hover:opacity-80">Services</a>
        <a href="#portfolio" class="hover:opacity-80">Portfolio</a>
        <a href="#contact" class="hover:opacity-80">Contact</a>
      </div>

      <!-- Call-to-Action Button -->
      <button class="bg-white text-primary px-6 py-2 rounded-full shadow-md hover:bg-gray-100">
        Let's talk
      </button>
    </nav>
  </header>
</template>

<script setup>
// import { ref } from "vue";

// Define your logo image
const logo="/images/mercylogo.png"
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
