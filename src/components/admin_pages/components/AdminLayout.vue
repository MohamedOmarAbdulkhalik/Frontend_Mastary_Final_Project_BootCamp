<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <!-- ✅ الهيدر -->
    <header
      class="flex justify-between items-center px-4 py-3 bg-white dark:bg-black shadow-md relative z-50"
    >
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <img class="w-14" src="../../../../images/logo.webp" alt="Logo" />
      </div>

      <!-- Navigation Links (Hidden on small screens) -->
      <nav class="hidden md:flex gap-6">
        <router-link
          class="text-[#bb8e4a] font-bold text-xl hover:text-black dark:hover:text-white"
          to="/"
          >Home</router-link
        >
        <router-link
          class="text-[#bb8e4a] font-bold text-xl hover:text-black dark:hover:text-white"
          to="/Projects"
          >Projects</router-link
        >
        <router-link
          class="text-[#bb8e4a] font-bold text-xl hover:text-black dark:hover:text-white"
          to="/Dashboard"
          >Dashboard</router-link
        >
      </nav>

      <!-- Right Side -->
      <div class="flex items-center gap-4">
        <!-- Dark Mode Toggle -->
        <button @click="toggleDarkMode">
          <svg
            v-if="!isDark"
            class="text-[#bb8e4a] cursor-pointer"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
          <svg
            v-else
            class="text-[#bb8e4a] cursor-pointer"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
          </svg>
        </button>

        <!-- زر فتح القائمة في الموبايل -->
        <button
          @click="toggleSidebar"
          class="md:hidden text-[#bb8e4a] focus:outline-none"
        >
          ☰
        </button>
      </div>
    </header>

    <!-- ✅ المحتوى -->
    <div class="flex">
      <!-- ✅ Sidebar -->
      <aside
        :class="[
          'fixed md:static top-16 left-0 w-64 bg-white dark:bg-gray-900 shadow-lg z-40 transition-transform duration-300',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        ]"
        style="height: calc(100vh - 64px)"
      >
        <div
          class="flex justify-between items-center px-4 py-3 border-b border-gray-200 dark:border-gray-700 md:hidden"
        >
          <h2 class="text-xl font-bold text-[#bb8e4a]">Menu</h2>
          <button @click="toggleSidebar" class="text-gray-600 dark:text-gray-300">
            ✖
          </button>
        </div>

        <nav class="flex flex-col gap-4 p-4">
          <router-link
            class="text-[#bb8e4a] font-bold text-lg hover:text-black dark:hover:text-white"
            to="/Dashboard"
            @click="closeOnMobile"
          >
            Dashboard
          </router-link>

          <router-link
            class="text-[#bb8e4a] font-bold text-lg hover:text-black dark:hover:text-white"
            to="/AdminProjects"
            @click="closeOnMobile"
          >
            Projects
          </router-link>

          <router-link
            class="text-[#bb8e4a] font-bold text-lg hover:text-black dark:hover:text-white"
            to="/AdminDonate"
            @click="closeOnMobile"
          >
            Donations
          </router-link>

          <router-link
            class="text-[#bb8e4a] font-bold text-lg hover:text-black dark:hover:text-white"
            to="/AdminExpenses"
            @click="closeOnMobile"
          >
            Expenses
          </router-link>
        </nav>
      </aside>

      <!-- ✅ Main Content -->
      <main class="flex-1 ml-0 md:ml-64 p-4 transition-all duration-300">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isDark = ref(false);
const isSidebarOpen = ref(false);

onMounted(() => {
  const savedMode = localStorage.getItem("darkMode");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedMode !== null) {
    isDark.value = savedMode === "true";
  } else if (prefersDark) {
    isDark.value = true;
  }
  updateDarkMode();
});

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  localStorage.setItem("darkMode", isDark.value);
  updateDarkMode();
};

const updateDarkMode = () => {
  document.documentElement.classList.toggle("dark", isDark.value);
};

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const closeOnMobile = () => {
  if (window.innerWidth < 768) isSidebarOpen.value = false;
};
</script>
