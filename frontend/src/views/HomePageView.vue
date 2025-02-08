<template>
  <div class="min-h-screen bg-gradient-to-b from-teal100 to-white">
    <HeaderSection />
    <HeroSection />
    <ServicesSection />
    <BioSection />
    <WorkSection />
    <div class="relative">
 <div class="absolute inset-x-0 -top-16 mx-auto max-w-3xl bg-white rounded-2xl shadow-lg px-8 py-10">
  <h2 class="text-2xl font-semibold text-gray-900 text-center">
    Cannot find your desired service?
  </h2>
  <p class="text-lg text-center text-pink-500 font-medium ">
    Let us know 24/7 in <span class="font-bold">123456</span>
  </p>

  <div class="flex justify-center gap-4 mt-6">
    <button class="bg-teal-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-teal-700 transition">
      Hire Me
    </button>
    <button class="border border-teal-600 text-teal-600 px-5 py-2 rounded-lg hover:bg-teal-600 hover:text-white transition">
      123456
    </button>
  </div>
</div>
</div>

    <FooterSection />
  </div>
</template>

<script setup>
import HeaderSection from "@/components/HeaderSection.vue";
import HeroSection from "@/components/HeroSection.vue";
import BioSection from "@/components/BioSection.vue";
import ServicesSection from "@/components/ServicesSection.vue";
import WorkSection from "@/components/WorkSection.vue";
import FooterSection from "@/components/footerSection.vue";
</script>




<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
