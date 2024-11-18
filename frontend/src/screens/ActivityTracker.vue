<script setup lang="ts">
import { onMounted } from "vue";
import { useActivitiesStore } from "../stores/activity-list/Activity.store";
import ActivityForm from "../components/activity-form/ActivityForm.vue";
import ActivityItems from "../components/activity-items/ActivityItems.vue";
import ActivityInfo from "../components/activity-info/ActivityInfo.vue";
import ActivityFilter from "../components/activity-filter/ActivityFilter.vue";

// Access the activities store
const activitiesStore = useActivitiesStore();

onMounted(() => {
  activitiesStore.getActivities();
});
</script>

<template>
  <div class="mx-auto max-w-4xl pt-8 px-6">
    <ActivityInfo />
    <section class="flex gap-4 pt-1 flex-col sm:flex-row">
      <ActivityFilter />

      <div class="flex-1">
        <!-- Activity Form -->
        <ActivityForm />

        <!-- Activity List -->
        <ActivityItems />
      </div>
    </section>
  </div>
</template>
