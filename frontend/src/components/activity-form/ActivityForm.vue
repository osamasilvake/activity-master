<script setup lang="ts">
import { ref } from "vue";
import { useActivitiesStore } from "../../stores/activity-list/Activity.store";

const newActivity = ref<string>("");

const activitiesStore = useActivitiesStore();

// Handle form submission
const addActivity = () => {
  if (newActivity.value.trim()) {
    activitiesStore.addActivity(newActivity.value);
    newActivity.value = "";
  }
};
</script>

<template>
  <form @submit.prevent="addActivity">
    <input
      class="w-full outline-none pt-2 px-2 pb-12 bg-101 border-b border-b-gray-500"
      v-model="newActivity"
      placeholder="Activity Description"
    />
    <div class="flex justify-end pt-2.5">
      <button
        :disabled="!newActivity"
        type="submit"
        class="py-2 px-4 bg-102 text-white rounded-md"
        :class="{ 'opacity-50 bg-101 cursor-not-allowed': !newActivity.trim() }"
      >
        Add Activity
      </button>
    </div>
  </form>
</template>
