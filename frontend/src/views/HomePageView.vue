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
import { ref } from 'vue'
import { StarIcon } from 'lucide-vue-next'

const profileImage = "/images/profile.png"


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

const projects = ref([
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution',
    image: '/placeholder.svg?height=400&width=600'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics and management platform',
    image: '/placeholder.svg?height=400&width=600'
  },
  {
    title: 'Healthcare App',
    description: 'Patient management system',
    image: '/placeholder.svg?height=400&width=600'
  }
])

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
