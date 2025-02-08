<template>
  <div class="min-h-screen bg-gradient-to-b from-teal-50 to-white">
    <HeaderSection />
    <HeroSection />
    <ServicesSection />
    <BioSection />
    <WorkSection />
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



<!-- <script setup>

const testimonials = ref([
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechCorp',
    content: 'Amazing work! The attention to detail and creative solutions provided exceeded our expectations.',
    avatar: '/placeholder.svg?height=100&width=100'
  },
  {
    name: 'Michael Chen',
    role: 'Founder at StartupX',
    content: 'Professional, responsive, and delivered exactly what we needed. Highly recommended!',
    avatar: '/placeholder.svg?height=100&width=100'
  }
])
</script> -->

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
