<template>
  <div class="carousel-container">
    <div class="carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="media in mediaItems" :key="media.url" class="carousel-slide">
        <video
          v-if="media.type === 'video'"
          :src="media.url"
          class="carousel-image"
          autoplay
          muted
          loop
          playsinline
        ></video>
        <img v-else :src="media.url" :alt="media.alt" class="carousel-image" />
      </div>
    </div>
    <div class="carousel-indicators">
      <button
        v-for="(_, index) in mediaItems"
        :key="index"
        :class="['indicator', { active: currentIndex === index }]"
        @click="setSlide(index)"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

type MediaItem = {
  url: string
  alt: string
  type: 'image' | 'video'
}

const isVideo = (path: string) => /\.(mov|mp4|webm)$/i.test(path)
const fileNameFromPath = (path: string) => path.split('/').pop() ?? 'carousel media'

const mediaModules = import.meta.glob(
  '../../public/carousel/*.{jpg,jpeg,png,gif,webp,avif,heic,mov,mp4,webm}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  },
) as Record<string, string>

const mediaItems: MediaItem[] = Object.entries(mediaModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, url]) => ({
    url,
    alt: fileNameFromPath(path),
    type: isVideo(path) ? 'video' : 'image',
  }))

const currentIndex = ref(0)
let intervalId: number | null = null

const setSlide = (index: number) => {
  currentIndex.value = index
}

const nextSlide = () => {
  if (mediaItems.length === 0) return
  currentIndex.value = (currentIndex.value + 1) % mediaItems.length
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
  background: #000;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.carousel-slide {
  min-width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
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
