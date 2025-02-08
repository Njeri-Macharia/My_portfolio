<template>
  <header class="fixed top-0 w-full z-50 bg-primary text-white shadow-md">
    <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo and Branding -->
      <a href="#" class="flex items-center text-2xl font-bold">
        <img :src="logo" alt="Logo" class="h-10 mr-2" /> Portfolio
      </a>

      <!-- Desktop Navigation Links -->
      <div class="hidden md:flex space-x-8">
        <a href="#home" class="hover:opacity-80">Home</a>
        <a href="#biography" class="hover:opacity-80">About Me</a>
        <a href="#services" class="hover:opacity-80">Services</a>
        <a href="#portfolio" class="hover:opacity-80">Portfolio</a>
        <a href="#contact" class="hover:opacity-80">Contact</a>
      </div>

      <!-- Mobile Hamburger Menu Button -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-black bg-opacity-50"
      @click="isMenuOpen = false"
    ></div>

    <!-- Slide-in Mobile Menu -->
    <div
      class="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-primary text-white transform transition-transform duration-300 ease-in-out"
      :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <button @click="isMenuOpen = false" class="absolute top-4 right-4 text-2xl">
        ✕ <!-- Close Icon -->
      </button>

      <nav class="flex flex-col items-center mt-16 space-y-6 text-lg">
        <a href="#home" class="hover:opacity-80" @click="isMenuOpen = false">Home</a>
        <a href="#about" class="hover:opacity-80" @click="isMenuOpen = false">About Me</a>
        <a href="#services" class="hover:opacity-80" @click="isMenuOpen = false">Services</a>
        <a href="#portfolio" class="hover:opacity-80" @click="isMenuOpen = false">Portfolio</a>
        <a href="#contact" class="hover:opacity-80" @click="isMenuOpen = false">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

// Define your logo image
const logo = "/images/mercylogo.png";
const isMenuOpen = ref(false);
</script>
