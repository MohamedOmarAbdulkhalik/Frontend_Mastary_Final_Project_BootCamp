<template>
  <div>
    <aside
      :class="[
        'fixed left-0 w-64 bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 z-40',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
      style="top: 86px; height: calc(100vh - 86px);" 
    >
      <div class="flex justify-between items-center px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <h2 class="text-xl font-bold text-[#bb8e4a]">Menu</h2>
        <button
          @click="toggleSidebar"
          aria-label="Close Sidebar"
          class="text-gray-600 dark:text-gray-300"
        >
          ✖
        </button>
      </div>

      <nav class="flex flex-col gap-4 p-4">
        <router-link
          class="text-[#bb8e4a] font-bold text-lg hover:text-black dark:hover:text-white"
          to="/Dashboard"
          @click="closeOnMobile"
        >Dashboard</router-link>

        <router-link
          class="text-[#bb8e4a] font-bold text-lg hover:text-black dark:hover:text-white"
          to="/AdminProjects"
          @click="closeOnMobile"
        >Projects</router-link>

        <router-link
          class="text-[#bb8e4a] font-bold text-lg hover:text-black dark:hover:text-white"
          to="/AdminDonate"
          @click="closeOnMobile"
        >Donations</router-link>

        <router-link
          class="text-[#bb8e4a] font-bold text-lg hover:text-black dark:hover:text-white"
          to="/AdminExpenses"
          @click="closeOnMobile"
        >Expenses</router-link>
      </nav>
    </aside>

    <!-- زر الفتح -->
    <button
      v-if="!isOpen"
      @click="toggleSidebar"
      class="fixed top-24 left-4 bg-[#bb8e4a] text-white p-3 rounded-lg shadow-md z-50"
    >
      ☰
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isOpen = ref(true);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};

const closeOnMobile = () => {
  if (window.innerWidth < 1024) {
    isOpen.value = false;
  }
};

onMounted(() => {
  if (window.innerWidth >= 1024) {
    isOpen.value = true;
  }
});
</script>
