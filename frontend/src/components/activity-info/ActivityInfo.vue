<script setup lang="ts">
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { useActivitiesStore } from "../../stores/activity-list/Activity.store";
import { dateFormat } from "../../utility/helpers/Date";

const welcomeMessage = () => {
  const greetings = "Good";

  // Get the current hour using dayjs formatted as 24-hour time
  const currentHourString = dateFormat(null, "HH"); // "HH" is for 24-hour format
  const currentHour = Number(currentHourString); // Convert to number

  console.log("Current Hour:", currentHour); // Debug: Check the value of currentHour

  if (currentHour < 12) {
    return `${greetings} Morning`;
  } else if (currentHour <= 17) {
    return `${greetings} Afternoon`;
  }
  return `${greetings} Evening`;
};

const activitiesStore = useActivitiesStore();
</script>

<template>
  <div class="pb-8">
    <div class="flex items-center gap-4">
      <h1 class="text-3xl">{{ welcomeMessage() }}</h1>
      <span class="pt-2">
        <font-awesome-icon class="text-green-500 h-8 w-8" :icon="faSmile" />
      </span>
    </div>
    <div class="pt-8">
      Here is today's breifing!
      <h2 class="py-2 text-lg">
        There are total
        <span class="bg-101 px-2 rounded-md text-lg"
          >{{ activitiesStore.tasksComplete }} tasks</span
        >

        are completed.
      </h2>
      <h2 class="py-2 text-lg">
        There are total
        <span class="bg-101 px-2 rounded-md text-lg"
          >{{ activitiesStore.tasksLeftToComplete }} tasks</span
        >

        left to complete.
      </h2>
    </div>
  </div>
</template>
