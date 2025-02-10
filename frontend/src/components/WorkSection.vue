<template>
  <section id="work" class="pb-40 py-10 bg-sectionbg">
    <div class="container mx-auto text-center">
      <h3 class="text-secondary font-bold">WORKING PROCESS</h3>
    </div>

    <div class="container mx-auto px-4 py-5">
      <h2 class="text-3xl font-bold text-center mb-8">My Latest Work</h2>

      <!-- Filter Buttons -->
      <div class="container bg-teal-100 rounded-full w-fit px-3 py-2 shadow-md flex flex-wrap justify-center gap-2 md:gap-3 mx-auto mb-10">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          class="px-2 md:px-3 py-1.5 rounded-full transition-all text-sm md:text-base whitespace-nowrap"
          :class="selectedCategory === category ? 'bg-primary text-black' : 'bg-gray-200 text-gray-600'">
          {{ category }}
        </button>
      </div>

      <!-- Projects -->
      <div v-if="selectedCategory === 'All'">
        <!-- Swiper Carousel -->
        <swiper
          :slides-per-view="1"
          :loop="true"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :pagination="{ clickable: true }"
          class="rounded-lg overflow-hidden shadow-lg"
        >
          <swiper-slide v-for="project in projects" :key="project.id">
            <div class="relative group">
              <img :src="project.image" :alt="project.title" class="w-full h-64 object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div class="absolute bottom-5 left-5 text-white">
                <h3 class="text-xl font-semibold">{{ project.title }}</h3>
                <p class="text-sm">{{ project.description }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <!-- Grid View for Specific Categories -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in filteredProjects" :key="project.id"
             class="group relative overflow-hidden rounded-xl shadow-md transition-transform transform hover:scale-105">
          <img :src="project.image" :alt="project.title" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">
          <div class="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="absolute bottom-0 p-5 transition-all duration-500 transform translate-y-10 group-hover:translate-y-0">
              <h3 class="text-black text-xl font-semibold mb-2">{{ project.title }}</h3>
              <p class="text-secondary mb-3">{{ project.description }}</p>
              <button class="bg-white text-secondary px-5 py-2 rounded-full hover:bg-secondary hover:text-white transition-colors duration-300">
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
import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const selectedCategory = ref("All");

const categories = ["All", "Web Design", "Web Development", "Mobile App"];

const projects = ref([
  // Web Design
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution',
    image: '/images/ecommerce.jpg',
    category: 'Web Design'
  },
  {
    title: 'Landing Pages Collection',
    description: 'Responsive web pages for various businesses',
    image: '/images/profile.jpg',
    category: 'Web Design'
  },

  // Web Development
  {
    title: 'My Portfolio',
    description: 'Personal website showcasing my work',
    image: '/images/dashboard.jpg',
    category: 'Web Development'
  },
  {
    title: 'FitCon Backend',
    description: 'Node.js backend for fitness app',
    image: '/images/backend.jpg',
    category: 'Web Development'
  },
  {
    title: 'Insurance Customer System Backend',
    description: 'Backend API for an insurance customer platform',
    image: '/images/insurance-backend.jpg',
    category: 'Web Development'
  },

  // Mobile Development
  {
    title: 'Trivia Quiz Game',
    description: 'Fun and interactive quiz game',
    image: '/images/trivia.jpg',
    category: 'Mobile App'
  },
  {
    title: 'Insurance Customer System',
    description: 'Mobile app for customer interactions with brokers',
    image: '/images/insurance-app.jpg',
    category: 'Mobile App'
  }
]);

const filteredProjects = computed(() => {
  if (selectedCategory.value === "All") return projects.value;
  return projects.value.filter((p) => p.category === selectedCategory.value);
});
</script>
