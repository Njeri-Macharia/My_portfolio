<template>
     <section id="work" class="py-20 bg-sectionbg">
      <div class="container mx-auto text-center  ">
        <h3 class="text-secondary font-bold ">WORKING PROCESS</h3>
      </div>


      <div class="container mx-auto px-4 py-5">
        <h2 class="text-3xl font-bold text-center mb-8">My Latest Work</h2>
    <!-- Filter Buttons -->
    <div class="container bg-teal100 rounded-full w-fit px-4 py-2 shadow-md flex justify-center gap-7 mx-auto mb-12 ">
      <button
        v-for="category in categories"
        :key="category"
        @click="selectedCategory = category"
        class="px-4 py-2 rounded-full transition-all"
        :class="selectedCategory === category ? 'bg-primary text-black' : 'bg-gray-200 text-gray-600'"
      >
        {{ category }}
      </button>
       </div>
        <!-- Projects -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div v-for="project in filteredProjects" :key="project.id"
               class="group relative overflow-hidden rounded-xl shadow-md  transition-transform transform hover:scale-105">
            <img :src="project.image" :alt="project.title" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div class="absolute bottom-0 p-6 transition-all duration-500 transform translate-y-10 group-hover:translate-y-0">
                <h3 class="text-black text-xl font-semibold mb-2">{{ project.title }}</h3>
                <p class="text-secondary mb-4">{{ project.description }}</p>
                <button class="bg-white text-secondary px-6 py-2 rounded-full hover:bg-secondary hover:text-white transition-colors duration-300">
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

const selectedCategory = ref("All");

const categories = ["All", "Web Design", "Web Development", "Mobile App"];
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
const filteredProjects = computed(() => {
  if (selectedCategory.value === "All") return projects.value;
  return projects.value.filter((p) => p.category === selectedCategory.value);
});
</script>

<style scoped>
/* Add custom styles if needed */
button {
  cursor: pointer;
}
</style>
