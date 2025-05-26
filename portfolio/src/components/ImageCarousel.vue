<template>
  <div class="carousel-container">
    <div class="carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(image, index) in images" :key="index" class="carousel-slide">
        <img :src="image.url" :alt="image.alt" class="carousel-image" />
      </div>
    </div>
    <div class="carousel-indicators">
      <button
        v-for="(_, index) in images"
        :key="index"
        :class="['indicator', { active: currentIndex === index }]"
        @click="setSlide(index)"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  {
    url: '/carousel/image1.jpg',
    alt: 'Professional workspace with modern equipment',
  },
  {
    url: '/carousel/image2.jpg',
    alt: 'Creative design process visualization',
  },
  {
    url: '/carousel/image3.jpg',
    alt: 'Team collaboration in modern office',
  },
  {
    url: '/carousel/image4.jpg',
    alt: 'Technology and innovation concept',
  },
]

const currentIndex = ref(0)
let intervalId: number | null = null

const setSlide = (index: number) => {
  currentIndex.value = index
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

onMounted(() => {
  // Start auto-rotation every 15 seconds
  intervalId = window.setInterval(nextSlide, 15000)
})

onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
.carousel-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.carousel-slide {
  min-width: 100%;
  height: 600px;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  padding: 0;
  transition: background-color 0.3s ease;
}

.indicator.active {
  background-color: white;
}
</style>
