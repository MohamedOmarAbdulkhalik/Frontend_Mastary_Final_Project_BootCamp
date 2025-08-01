


<template>
    <SideNaveBar></SideNaveBar>
  <div class="container mx-auto px-4 py-10">
    <!-- العنوان -->
    <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center">
      Manage Projects
    </h2>

    <!-- Form -->
    <div class="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-xl mx-auto mb-10">
      <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        {{ editIndex !== null ? 'Edit Project' : 'Add New Project' }}
      </h3>

      <form @submit.prevent="saveProject" class="space-y-4">
        <input
          v-model="form.title"
          type="text"
          placeholder="Project Title"
          class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />

        <textarea
          v-model="form.description"
          placeholder="Project Description"
          class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>

        <input
          v-model="form.image"
          type="text"
          placeholder="Image URL"
          class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          class="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition"
        >
          {{ editIndex !== null ? 'Update Project' : 'Add Project' }}
        </button>
      </form>
    </div>

    <!-- عرض المشاريع -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      >
        <img :src="project.image" alt="Project" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ project.title }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>

          <div class="flex gap-3">
            <button
              @click="editProject(index)"
              class="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg transition"
            >
              Edit
            </button>
            <button
              @click="deleteProject(index)"
              class="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- رسالة فارغة -->
    <p v-if="projects.length === 0" class="text-center text-gray-500 mt-10">
      No projects added yet.
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import SideNaveBar from './SideNaveBar.vue';

const projects = ref([]);
const form = ref({ title: "", description: "", image: "" });
const editIndex = ref(null);

// تحميل البيانات من localStorage عند تشغيل الصفحة
onMounted(() => {
  const storedProjects = localStorage.getItem("projects");
  if (storedProjects) {
    projects.value = JSON.parse(storedProjects);
  }
});

// تحديث localStorage تلقائيًا عند تغيير المشاريع
watch(
  projects,
  (newVal) => {
    localStorage.setItem("projects", JSON.stringify(newVal));
  },
  { deep: true }
);

// إضافة أو تعديل مشروع
const saveProject = () => {
  if (editIndex.value !== null) {
    projects.value[editIndex.value] = { ...form.value };
    editIndex.value = null;
  } else {
    projects.value.push({ ...form.value });
  }

  form.value = { title: "", description: "", image: "" };
};

// تعديل مشروع
const editProject = (index) => {
  form.value = { ...projects.value[index] };
  editIndex.value = index;
};

// حذف مشروع
const deleteProject = (index) => {
  if (confirm("Are you sure you want to delete this project?")) {
    projects.value.splice(index, 1);
  }
};
</script>
