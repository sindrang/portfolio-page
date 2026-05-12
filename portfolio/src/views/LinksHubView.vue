<script setup lang="ts">
import { RouterLink } from 'vue-router'

type HubLink = {
  label: string
  href: string
  external?: boolean
}

const links: HubLink[] = [
  {
    label: "Let's meet — book a time",
    href: 'https://calendar.app.google/YHovgU3NfPbZRRhD9',
    external: true,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/just_sindhu_it/',
    external: true,
  },
  {
    label: 'Full Circle Presents - Sunday Supper! 6/21',
    href: 'https://partiful.com/e/RjO6VFnLnRMXyn3Y8Wgg?c=2704JZJu',
    external: true,
  },
  {
    label: 'What A Mess (Short Film) - Youtube',
    href: 'https://www.youtube.com/watch?v=kmdUs181tkk',
    external: true,
  },
  {
    label: 'What A Mess (Short Film) - Screening Tickets! (5/15)',
    href: 'https://silver.afi.com/movies/detail/0100003540/',
    external: true,
  },
]
</script>

<template>
  <main
    class="min-h-screen flex flex-col items-center px-5 pt-14 pb-10 bg-pale-orange bg-gradient-to-b from-[#fef3e8] via-[#facf9f] to-[#f9c387]"
  >
    <div class="w-full max-w-md flex flex-col items-center text-center">
      <p class="young-serif-regular text-3xl text-black mb-1">Sindhu</p>
      <p class="bitter-paragraph text-sm text-black/75 mb-10 max-w-xs">
        Sustainability-forward clothing designer, upcycler, and atelier
      </p>

      <ul class="w-full space-y-3 list-none p-0 m-0">
        <li v-for="item in links" :key="item.href">
          <a
            :href="item.href"
            class="block w-full py-3.5 px-5 rounded-2xl bg-white/90 text-black shadow-sm border border-black/5 bitter-paragraph text-center text-base hover:bg-white hover:shadow-md hover:border-black/10 transition-all duration-200"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noopener noreferrer' : undefined"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <RouterLink
        to="/"
        class="mt-10 text-sm bitter-paragraph text-black/55 hover:text-black/80 underline-offset-4 hover:underline"
      >
        Portfolio home
      </RouterLink>
    </div>
  </main>
</template>
