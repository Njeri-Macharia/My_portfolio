<template>
     <section id="work" class="py-20 bg-sectionbg">
      <div class="container mx-auto text-center  ">
        <h3 class="text-secondary font-bold ">WORKING PROCESS</h3>
      </div>
      <div class="container mx-auto px-4 py-5">
        <h2 class="text-3xl font-bold text-center mb-16">My Latest Work</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.title"
               class="group relative overflow-hidden rounded-xl">
            <img :src="project.image" :alt="project.title" class="w-full h-64 object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div class="absolute bottom-0 p-6">
                <h3 class="text-black text-xl font-semibold mb-2">{{ project.title }}</h3>
                <p class="text-secondary mb-4">{{ project.description }}</p>
                <button class="bg-white text-teal-600 px-6 py-2 rounded-full">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

const projects = ref([
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution',
    image: '/images/ecormmerce.jpg'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics and management platform',
    image: '/images/dashboard.jpg'
  },
  {
    title: 'Healthcare App',
    description: 'Patient management system',
    image: '/images/mobileapp.jpeg'
  }
]);
</script>

<style scoped>
/* Add custom styles if needed */
</style>
