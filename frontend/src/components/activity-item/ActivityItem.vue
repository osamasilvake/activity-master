<script setup lang="ts">
import { POSITION, useToast } from "vue-toastification";
import { useActivitiesStore } from "../../stores/activity-list/Activity.store";
import Loading from "../common/Loading.vue";
import { faSmile, faTrash } from "@fortawesome/free-solid-svg-icons";

// Props
defineProps({
  activity: Object,
});

const activitiesStore = useActivitiesStore();
const toast = useToast();

const toggleActivity = (id: number, completed: boolean) => {
  activitiesStore.toggleActivity(id, completed);
};

const deleteActivity = (id: number) => {
  activitiesStore.deleteActivity(id);
  toast.error("Activity successfully deleted!", {
    timeout: 1000, // in milliseconds
    position: POSITION.BOTTOM_RIGHT,
  });
};
</script>

<template>
  <div>
    <div class="pt-10">
      <Loading />
    </div>
    <ul class="mt-5">
      <li
        v-if="!activitiesStore.completedTodos.length"
        class="bg-101 py-3 mb-4"
      >
        <div class="flex items-center gap-3 justify-center">
          <p class="font-semibold">Empty List</p>
          <span>
            <font-awesome-icon
              class="text-indigo-400 h-5 w-5"
              :icon="faSmile"
            />
          </span>
        </div>
      </li>
      <!-- Render completed todos -->
      <li
        v-else
        class="flex gap-4 bg-101 text-center py-4 mb-4"
        v-for="activity in activitiesStore.completedTodos"
        :key="activity._id"
      >
        <div class="flex w-full items-center gap-3 justify-between px-3">
          <p>{{ activity.description }}</p>
          <div class="flex gap-3">
            <input
              class="accent-green-500 w-4 border-2 border-gray-300 rounded-sm"
              type="checkbox"
              :checked="activity.completed"
              @change="toggleActivity(activity._id, activity.completed)"
            />
            <span
              class="cursor-pointer text-red-400"
              @click="deleteActivity(activity._id)"
            >
              <font-awesome-icon :icon="faTrash" />
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
