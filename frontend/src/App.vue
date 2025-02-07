<template>
  <div class="min-h-screen bg-gradient-to-b from-teal-50 to-white">
    <!-- Header/Navigation -->
    <header class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b">
      <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" class="text-2xl font-bold text-teal-600">Portfolio</a>
        <div class="hidden md:flex space-x-8">
          <a href="#about" class="text-gray-700 hover:text-teal-600">About</a>
          <a href="#services" class="text-gray-700 hover:text-teal-600">Services</a>
          <a href="#work" class="text-gray-700 hover:text-teal-600">Work</a>
          <a href="#testimonials" class="text-gray-700 hover:text-teal-600">Testimonials</a>
        </div>
        <button class="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700">
          Contact Me
        </button>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-4">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Professional
            <span class="text-teal-600">UI/UX Designer</span>
            & Web Developer
          </h1>
          <p class="text-gray-600 mb-8 text-lg">
            Creating beautiful and functional digital experiences that help businesses grow
          </p>
          <div class="flex space-x-4">
            <button class="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700">
              Hire Me
            </button>
            <button class="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full hover:bg-teal-50">
              View Portfolio
            </button>
          </div>
        </div>
        <div class="md:w-1/2">
          <img :src="profileImage" alt="Professional portrait" class="w-full max-w-lg mx-auto rounded-2xl shadow-xl">
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-16">What Can I do?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title"
               class="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <component :is="service.icon" class="w-8 h-8 text-teal-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ service.title }}</h3>
            <p class="text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="work" class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-16">My Latest Work</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.title"
               class="group relative overflow-hidden rounded-xl">
            <img :src="project.image" :alt="project.title" class="w-full h-64 object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-teal-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div class="absolute bottom-0 p-6">
                <h3 class="text-white text-xl font-semibold mb-2">{{ project.title }}</h3>
                <p class="text-teal-100 mb-4">{{ project.description }}</p>
                <button class="bg-white text-teal-600 px-6 py-2 rounded-full">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-20 bg-teal-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-16">Client Testimonials</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.name"
               class="bg-white p-8 rounded-xl shadow-lg">
            <div class="flex items-center mb-6">
              <img :src="testimonial.avatar" :alt="testimonial.name"
                   class="w-16 h-16 rounded-full object-cover mr-4">
              <div>
                <h4 class="font-semibold text-lg">{{ testimonial.name }}</h4>
                <p class="text-gray-600">{{ testimonial.role }}</p>
              </div>
            </div>
            <p class="text-gray-700">{{ testimonial.content }}</p>
            <div class="flex text-yellow-400 mt-4">
              <star-icon v-for="n in 5" :key="n" class="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8">Can't find your desired service?</h2>
        <p class="text-gray-600 mb-8">Let's discuss how I can help you achieve your goals</p>
        <button class="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700">
          Let's talk 24/7 at +1 234 567 890
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-teal-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-2xl font-bold mb-4">Portfolio</h3>
            <p class="text-teal-100">Creating digital experiences that matter</p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-teal-100 hover:text-white">About</a></li>
              <li><a href="#" class="text-teal-100 hover:text-white">Services</a></li>
              <li><a href="#" class="text-teal-100 hover:text-white">Work</a></li>
              <li><a href="#" class="text-teal-100 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Services</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-teal-100 hover:text-white">UI/UX Design</a></li>
              <li><a href="#" class="text-teal-100 hover:text-white">Web Development</a></li>
              <li><a href="#" class="text-teal-100 hover:text-white">Mobile Apps</a></li>
              <li><a href="#" class="text-teal-100 hover:text-white">Branding</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Contact</h4>
            <ul class="space-y-2">
              <li class="text-teal-100">contact@example.com</li>
              <li class="text-teal-100">+1 234 567 890</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { StarIcon } from 'lucide-vue-next'

const profileImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dYI9rscybKepIertoQAwbmNsjEGlvG.png"

const services = ref([
  {
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user interfaces that delight users',
    icon: 'PenToolIcon'
  },
  {
    title: 'Web Development',
    description: 'Building responsive and performant web applications',
    icon: 'CodeIcon'
  },
  {
    title: 'Mobile Development',
    description: 'Developing cross-platform mobile applications',
    icon: 'SmartphoneIcon'
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
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
