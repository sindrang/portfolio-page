<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { ref } from 'vue'

const tabs: string[] = ['Engineering', 'Writing', 'Voice', 'Sewing', 'Mixology']
const menuOpen = ref(false)

const openMeetingsInNewTab = () => {
  window.open('https://calendar.app.google/YHovgU3NfPbZRRhD9', '_blank')
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <div class="h-screen">
    <nav class="bg-pale-orange border-gray-200">
      <div
        class="py-4 px-5 w-full max-w-screen-xl flex flex-wrap items-center justify-between md:mx-auto md:pt-5"
      >
        <RouterLink to="/">
          <span class="self-center text-2xl young-serif-regular whitespace-nowrap dark:text-black">
            Sindhu Ranga
          </span>
        </RouterLink>
        <button
          @click="toggleMenu"
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          class="absolute top-13 right-0 mt-2 w-40 rounded-md bg-white md:hidden"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1" role="none" v-show="menuOpen">
            <!-- Active: "bg-gray-100 text-gray-900 outline-hidden", Not Active: "text-gray-700" -->
            <RouterLink
              v-for="tab in tabs"
              :to="'/' + tab"
              class="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              {{ tab }}
            </RouterLink>
            <a
              @click="openMeetingsInNewTab"
              class="block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
              >Let's meet!</a
            >
          </div>
        </div>
        <div class="hidden w-full md:flex md:w-auto">
          <ul
            class="font-medium bg-pale-orange flex flex-col py-4 md:py-3 px-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:mr-3 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
          >
            <li v-for="tab in tabs">
              <RouterLink
                :to="'/' + tab"
                class="block py-2 px-3 text-black bg-pale-orange bitter-paragraph"
                aria-current="page"
              >
                {{ tab }}
              </RouterLink>
            </li>
          </ul>
          <button
            @click="openMeetingsInNewTab"
            class="py-3 px-8 text-white bg-dark-orange rounded-4xl bitter-paragraph md:ml-5"
          >
            <span>Let's meet!</span>
          </button>
        </div>
      </div>
    </nav>
    <div class="block h-4/5 bg-pale-orange">
      <RouterView />
    </div>

    <footer class="flex bg-pale-orange shadow-sm m-0 h-1/12 py-4 px-20">
      <div class="w-full justify-right">
        <ul class="flex justify-center space-x-4">
          <li>
            <a href="https://github.com/sindrang"><i class="fab fa-github"></i></a>
          </li>
          <!-- <li>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </li> -->
          <li>
            <a href="https://www.linkedin.com/in/sindhu-ranga/"
              ><i class="fab fa-linkedin-in"></i
            ></a>
          </li>
          <!-- <li>
            <a href="#"><i class="fab fa-youtube"></i></a>
          </li> -->
          <li>
            <a href="mailto:sindhu.ranga@gmail.com"><i class="fas fa-envelope"></i></a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.active_menu {
  display: block;
}

.disabled_menu {
  display: hidden;
}
</style>
