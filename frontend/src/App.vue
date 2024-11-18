<script setup lang="ts">
import { onMounted } from "vue";
import ActivityTracker from "./screens/ActivityTracker.vue";
import { useActivitiesStore } from "./stores/activity-list/Activity.store";
// import ActivityList from "./components/ActivityList.vue";
const activitiesStore = useActivitiesStore();

onMounted(() => {
  activitiesStore.getActivities();
});
</script>

<template>
  <ActivityTracker />
  <!-- <ActivityList /> -->
</template>
