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
          @click="handleCategoryChange(category)"
          class="px-2 md:px-3 py-1.5 rounded-full transition-all text-sm md:text-base whitespace-nowrap"
          :class="selectedCategory === category ? 'bg-primary text-black' : 'bg-gray-200 text-gray-600'">
          {{ category }}
        </button>
      </div>

      <!-- Slider View for "All" Category -->
      <div v-if="selectedCategory === 'All'" class="relative">
        <div class="overflow-hidden">
          <div class="flex transition-transform duration-500 ease-in-out"
               :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div v-for="project in projects" :key="project.id"
                 class="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-3">
              <div class="group relative overflow-hidden rounded-xl shadow-md h-64">
                <img :src="project.image" :alt="project.title"
                     class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110">
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
        </div>

        <!-- Navigation Arrows -->
        <button @click="prevSlide"
                class="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors -ml-4">
          <chevron-left-icon class="w-6 h-6 text-secondary" />
        </button>
        <button @click="nextSlide"
                class="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors -mr-4">
          <chevron-right-icon class="w-6 h-6 text-secondary" />
        </button>

        <!-- Dots Navigation -->
        <div class="flex justify-center mt-6 gap-2">
          <button v-for="(_, index) in slideGroups"
                  :key="index"
                  @click="goToSlide(index)"
                  class="w-3 h-3 rounded-full transition-colors"
                  :class="currentSlide === index ? 'bg-primary' : 'bg-gray-300'">
          </button>
        </div>
      </div>

      <!-- Grid View for Other Categories -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in filteredProjects" :key="project.id"
             class="group relative overflow-hidden rounded-xl shadow-md transition-transform transform hover:scale-105">
          <img :src="project.image" :alt="project.title"
               class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">
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
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next';

const selectedCategory = ref("All");
const currentSlide = ref(0);

const categories = ["All", "Web Design", "Web Development", "Mobile App"];

const projects = ref([
  // Web Design
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution',
    image: '/images/ecormmerce.jpg',
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
    image: '/images/ecormmerce.jpg',
    category: 'Web Development'
  },
  {
    title: 'Insurance Customer System Backend',
    description: 'Backend API for an insurance customer platform',
    image: '/images/ecormmerce.jpg',
    category: 'Web Development'
  },
  // Mobile Development
  {
    title: 'Trivia Quiz Game',
    description: 'Fun and interactive quiz game',
    image: '/images/mobileapp.jpeg',
    category: 'Mobile App'
  },
  {
    title: 'Insurance Customer System',
    description: 'Mobile app for customer interactions with brokers',
    image: '/images/dashboard.jpg',
    category: 'Mobile App'
  }
]);

const filteredProjects = computed(() => {
  if (selectedCategory.value === "All") return projects.value;
  return projects.value.filter((p) => p.category === selectedCategory.value);
});

// Calculate number of slide groups based on screen size
const slideGroups = computed(() => {
  const itemsPerSlide = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  return Math.ceil(projects.value.length / itemsPerSlide);
});

// Slider navigation functions
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slideGroups.value;
};

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slideGroups.value - 1 : currentSlide.value - 1;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const handleCategoryChange = (category) => {
  selectedCategory.value = category;
  currentSlide.value = 0; // Reset slider position when changing categories
};

// Optional: Auto-slide functionality
let autoSlideInterval;

const startAutoSlide = () => {
  autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
};

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
};

// Start auto-slide when component mounts
onMounted(() => {
  if (selectedCategory.value === 'All') {
    startAutoSlide();
  }
});

// Clean up interval when component unmounts
onUnmounted(() => {
  stopAutoSlide();
});

// Watch for category changes to manage auto-slide
watch(selectedCategory, (newCategory) => {
  if (newCategory === 'All') {
    startAutoSlide();
  } else {
    stopAutoSlide();
  }
});
</script>

<style scoped>
/* Optional: Add smooth scrolling behavior for the slider */
.transition-transform {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
