<template>
  <section id="biography" class="bg-teal-100 py-12 px-6 md:px-16 rounded-lg relative overflow-hidden scroll-mt-20">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <!-- Left Side (Title & Button) -->
      <div>
        <h2 class="text-6xl font-bold text-gray-900"><i>
          My <br> <span class="text-black">Biography</span></i>
        </h2>
        <button class="mt-12 flex items-center space-x-3 bg-white px-8 py-5 rounded-lg shadow-md hover:shadow-lg transition">
          <div class="w-8 h-8 flex items-center justify-center bg-secondary rounded-full">
            <CheckIcon class="w-5 h-5 text-white" />
          </div>
          <span class="text-gray-900 font-medium">Download CV</span>
        </button>
      </div>

      <!-- Right Side (Biography Text) -->
      <div>
        <p class="text-gray-700 text-lg leading-relaxed">
          I am an aspiring Data Science enthusiast with a strong foundation in full-stack development, specializing in Vue.js, Node.js, Flutter, MongoDB, and SQL. My passion lies in leveraging technology to solve real-world problems, with a keen interest in Artificial Intelligence (AI) and data-driven solutions.
        </p>

        <p class="text-gray-700 text-lg leading-relaxed mt-4">
          Beyond development, I am an event organizer at Daystar Information and Technology Association Ladies (DITA Lit), where I have successfully coordinated impactful events such as Members’ Day and Codeversations, bringing together multiple speakers to inspire and empower fellow tech enthusiasts.
        </p>

        <!-- Bullet Points for Skills & Interests -->
        <ul class="list-disc list-inside mt-4  text-lg">
          <li><strong class="text-secondary">Frontend:</strong> Vue.js, Tailwind CSS</li>
          <li><strong class="text-secondary">Backend:</strong> Node.js</li>
          <li><strong class="text-secondary">Mobile Development:</strong> Flutter (GetX, Navigator)</li>
          <li><strong class="text-secondary">Databases:</strong> MongoDB, SQL</li>
          <li><strong class="text-secondary">Data Science & AI:</strong> Exploring machine learning and predictive analytics</li>
          <li><strong class="text-secondary">Community Leadership:</strong> Organizing tech events & fostering collaboration</li>
        </ul>

        <p class="text-gray-700 text-lg leading-relaxed mt-4">
          I am constantly learning, exploring new technologies, and building solutions that make a difference. Looking forward to collaborations, mentorship, and opportunities in data science, AI, and software development!
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
