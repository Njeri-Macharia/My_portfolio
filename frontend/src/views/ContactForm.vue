<template>
  <div class="flex items-center justify-center min-h-screen bg-sectionbg">
    <div class="bg-teal100 p-8 rounded-2xl shadow-lg w-full max-w-lg">
      <div class="text-center mb-8">
        <h1 class="text-2xl font-semibold text-secondary">Write Me Your Project</h1>
    </div>
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            required
            class="mt-1 block w-full rounded-md border-primary shadow-sm focus:border-primary focus:ring-primary"
          >
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            required
            class="mt-1 block w-full rounded-md border-'primary shadow-sm focus:border-primary focus:ring-primary"
          >
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            v-model="formData.message"
            rows="4"
            required
            class="mt-1 block w-full rounded-md border-primary shadow-sm focus:border-primary focus:ring-primary"
          ></textarea>
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
        >
          {{ loading ? 'Sending...' : 'Send Message' }}
        </button>

        <div v-if="message" :class="['text-center p-4 rounded', success ? 'bg-green text-green-700' : 'bg-red text-red-700']">
          {{ message }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)
const message = ref('')
const success = ref(false)

const handleSubmit = async () => {
  loading.value = true
  message.value = ''

  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    const data = await response.json()

    if (response.ok) {
      success.value = true
      message.value = 'Message sent successfully!'
      // Reset form
      formData.name = ''
      formData.email = ''
      formData.message = ''
    } else {
      success.value = false
      message.value = data.message || 'Error sending message'
    }
  } catch {
    success.value = false
    message.value = 'Error sending message'
  } finally {
    loading.value = false
  }
}
</script>
