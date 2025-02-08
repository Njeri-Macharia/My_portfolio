<template>
  <div class="min-h-screen bg-gradient-to-b from-teal-50 to-white">
    <!-- Header/Navigation -->
    <header class="fixed top-0 w-full z-50 bg-primary text-white shadow-md">
  <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
    <!-- Logo and Branding -->
    <a href="#" class="flex items-center text-2xl font-bold">
      <img :src="logo" alt="Logo" class="h-8 mr-2" /> Portfolio
    </a>

    <!-- Navigation Links -->
    <div class="hidden md:flex space-x-8">
      <a href="#home" class="hover:opacity-80">Home</a>
      <a href="#about" class="hover:opacity-80">About Me</a>
      <a href="#services" class="hover:opacity-80">Services</a>
      <a href="#portfolio" class="hover:opacity-80">Portfolio</a>
      <a href="#contact" class="hover:opacity-80">Contact</a>
    </div>

    <!-- Call-to-Action Button -->
    <button class="bg-white text-primary px-6 py-2 rounded-full shadow-md hover:bg-gray-100">
      Let's talk
    </button>
  </nav>
</header>


    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-4 bg-teal100">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <h2 class="text-secondary text-3xl font-semibold">Hello, I'm Mercy Macharia</h2>
          <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Professional
            <span class="text-teal-600">Mobile Developer</span>
            & data Science Enthusiast
          </h1>
          <p class="text-gray-600 mb-8 text-lg">
            Creating beautiful and functional digital experiences that help businesses grow
          </p>
          <div class="flex space-x-4">
            <button class="bg-secondary text-white px-8 py-3 rounded-full hover:bg-primary">
              Hire Me
            </button>
            <button class="bg-primary border-2 border-primary text-white px-8 py-3 rounded-full hover:bg-secondary hover:border-secondary">
              View Portfolio
            </button>
          </div>
        </div>
        <div class="md:w-1/2 flex justify-center">
          <img :src="profileImage" alt="Professional portrait" class="object-cover max-w-lg mx-auto">
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-10 bg-sectionbg">
      <div class="container w-20 h-8 mx-auto shadow-lg text-center rounded-2x1 bg-white">
        <h3 class="text-secondary font-bold ">Services</h3>
      </div>
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-16">What Can I do?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title"
               class="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <img :src="service.icon" :alt="service.title" class="w-20 h-20 object-contain" />
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ service.title }}</h3>
            <p class="text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- my biography section -->
    <section class="bg-gray-50 py-12 px-6 md:px-16 rounded-lg relative overflow-hidden">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

      <!-- Left Side (Title & Button) -->
      <div>
        <h2 class="text-3xl font-bold text-gray-900">My <br> <span class="text-black">Biography</span></h2>
        <button class="mt-6 flex items-center space-x-3 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition">
          <div class="w-8 h-8 flex items-center justify-center bg-secondary rounded-full">
            <CheckIcon class="w-5 h-5 text-white" />
          </div>
          <span class="text-gray-900 font-medium">Download CV</span>
        </button>
      </div>

      <!-- Right Side (Biography Text) -->
      <div>
        <p class="text-gray-700 text-lg leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting.
        </p>
        <p class="text-gray-600 mt-4">
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
        </p>
      </div>

    </div>

    <!-- Decorative Circles -->
    <div class="absolute bottom-0 right-0 flex space-x-2">
      <div class="w-10 h-10 bg-orange  rounded-full"></div>
      <div class="w-16 h-16 bg-teal-600 rounded-full"></div>
    </div>
  </section>

    <!-- Portfolio Section -->
    <section id="work" class="py-20 bg-sectionbg">
      <div class="container mx-auto text-center  ">
        <h3 class="text-secondary font-bold ">WORKING PROCESS</h3>
      </div>
      <div class="container mx-auto px-4 py-5">
        <h2 class="text-3xl font-bold text-center mb-16">My Latest Work</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.title"
               class="group relative overflow-hidden rounded-xl">
            <img :src="project.image" :alt="project.title" class="w-full h-64 object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-teal-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div class="absolute bottom-0 p-6">
                <h3 class="text-white text-xl font-semibold mb-2">{{ project.title }}</h3>
                <p class="text-primary mb-4">{{ project.description }}</p>
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
    <footer class="bg-primary text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-2xl font-bold mb-4">Portfolio</h3>
            <p class="text-white">Creating digital experiences that matter</p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a href="#about" class="text-white hover:text-white">About</a></li>
              <li><a href="#sevices" class="text-white hover:text-white">Services</a></li>
              <li><a href="#portfolio" class="text-white hover:text-white">Work</a></li>
              <li><a href="#contact" class="text-white hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Services</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-white hover:text-white">UI/UX Design</a></li>
              <li><a href="#" class="text-white hover:text-white">Web Development</a></li>
              <li><a href="#" class="text-white hover:text-white">Mobile Apps</a></li>
              <li><a href="#" class="text-white hover:text-white">Branding</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Contact</h4>
            <ul class="space-y-2">
              <li class="text-white">mercymachariya@gmail.com</li>
              <li class="text-white">+254703503568</li>
            </ul>
            <div class="mt-10 flex flex-col md:flex-row items-center justify-between px-6 container mx-auto">
            <a href="www.linkedin.com/in/mercy-macharia-941a25222" class="text-white text-xl hover:text-secondary"><i class="fab fa-linkedin"></i></a>
           <a href="#" class="text-white text-xl hover:text-secondary"><i class="fab fa-instagram"></i></a>
           <a href="#" class="text-white text-xl hover:text-secondary"><i class="fas fa-globe"></i></a>
          </div>
    </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { StarIcon } from 'lucide-vue-next'

const profileImage = "/images/profile.png"
const logo="/images/mercylogo.png"

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
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
