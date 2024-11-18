<script setup lang="ts">
import { ref } from "vue";
import { useActivitiesStore } from "../../stores/activity-list/Activity.store";
import { filterList } from "./ActivityFilter.list";
import { ActivityFilterEnum } from "./ActivityFilter.enum";

const activeFilter = ref(ActivityFilterEnum.FILTER_ALL); // Default to 'all'
const activitesStore = useActivitiesStore();

// Function to change the filter
const changeFilter = (filter: string) => {
  activeFilter.value = filter;
  activitesStore.setFilter(filter);
};
</script>

<template>
  <nav class="w-52">
    <aside>
      <div>
        <ul>
          <li
            v-for="filter in filterList"
            :key="filter.value"
            :class="{
              'bg-101': activeFilter === filter.value,
              ' bg-transparent': activeFilter !== filter.value,
            }"
            @click="changeFilter(filter.value)"
          >
            <button class="px-3 py-1 my-1">
              {{ filter.label }}
            </button>
          </li>
        </ul>
      </div>
    </aside>
  </nav>
</template>
