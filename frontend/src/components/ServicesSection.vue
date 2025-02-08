<template>
  <section id="services" class="py-8 pb-15 bg-sectionbg">
    <!-- Services Title Container -->
    <div class="w-fit px-6 py-2 mx-auto shadow-lg text-center rounded-xl bg-white">
      <h3 class="text-secondary font-bold text-lg">Services</h3>
    </div>

    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-16">What Can I Do?</h2>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <!-- Service Icon -->
          <div class="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <img :src="service.icon" :alt="service.title" class="w-20 h-20 object-contain" />
            </div>

          <!-- Service Title & Description -->
          <h3 class="text-xl font-semibold mb-3">{{ service.title }}</h3>
          <p class="text-gray-600">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const services = ref([
  {
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user interfaces that delight users',
    icon: '/images/uidesign.png'
  },
  {
    title: 'Web Development',
    description: 'Building responsive and performant web applications',
    icon: '/images/webdev.png'
  },
  {
    title: 'Mobile Development',
    description: 'Developing cross-platform mobile applications',
    icon: '/images/mobiledev.png'
  }
])
</script>

<style scoped>
/* Add specific styles if needed */
</style>
