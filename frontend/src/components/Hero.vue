<template>
  <section class="bg-white py-20 relative overflow-hidden">
    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div class="text-left">
        <h2 class="text-pink-500 text-3xl font-semibold">Hello, I'm Mercy Macharia</h2>
        <h1 class="text-5xl font-bold text-gray-800 leading-tight mb-6">
          Mobile Developer <br />
          Web Developer <br />
          & Aspiring Data science Enthusiast
        </h1>
        <button
          class="bg-pink-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-pink-600 flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 00-1 1v2a1 1 0 001 1h3.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          <span>Hire Me Now</span>
        </button>
      </div>
      <div class="relative">
        <img src="/images/profile.jpg" alt="Hero Image" class="rounded-full" />
        <!-- Optional: Add the circular background effect -->
        <!-- <div class="absolute top-0 left-0 w-full h-full bg-blue-100 rounded-full opacity-20"></div> -->
      </div>
    </div>
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-500">
      Scroll Down
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>
