<script setup lang="ts">
import { useActivitiesStore } from "../../stores/activity-list/Activity.store";

const activitiesStore = useActivitiesStore();
</script>
<template>
  <div class="flex justify-center items-center" v-if="activitiesStore.loading">
    Loading...
  </div>
</template>
