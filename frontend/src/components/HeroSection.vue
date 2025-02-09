<template>
  <section class="pt-20 pb-20 px-4 bg-teal-100 flex items-center justify-center min-h-screen">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <!-- Left Content -->
      <div class="md:w-1/2 w-full space-y-6 text-center md:text-left">
        <h2 class="text-secondary text-3xl font-semibold">Hello, I'm Mercy Macharia</h2>
        <h1 class="text-4xl md:text-6xl font-bold text-gray-800 leading-relaxed">
          Professional
          <span class="text-teal-600">Mobile Developer</span>
          & Data Science Enthusiast
        </h1>
        <p class="text-gray-600 text-lg leading-loose">
          Creating beautiful and functional digital experiences that help businesses grow
        </p>
        <div class="flex justify-center md:justify-start space-x-4">
          <router-link to="/lets-talk" class="bg-secondary text-white px-8 py-3 rounded-full hover:bg-primary">
            Hire Me
          </router-link>
          <a href="#biography">
            <button class="bg-primary border-2 border-primary text-white px-8 py-3 rounded-full hover:bg-secondary hover:border-secondary">
              View Portfolio
            </button>
          </a>
        </div>
      </div>

      <!-- Right Image -->
      <div class="md:w-1/2 flex justify-center">
        <img
          ref="imageRef"
          :src="profileImage"
          alt="Professional portrait"
          class="object-cover max-w-lg mx-auto rounded-full shadow-lg"
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useMotion } from "@vueuse/motion";

const profileImage = "/images/profile.png";
const imageRef = ref(null);

// Apply animation when mounted
onMounted(() => {
  useMotion(imageRef, {
    initial: { opacity: 0, scale: 0.5 },
    enter: { opacity: 1, scale: 1, transition: { duration: 300 } },
    hover: { scale: 1.1 }
  });
});
</script>
