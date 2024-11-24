import { defineStore } from "pinia";

import { ActivityFilterEnum } from "../../components/activity-filter/ActivityFilter.enum";
import { Activity } from "./Activity.interface";
import ActivityService from "../../components/activity/activity.service";

export const useActivitiesStore = defineStore("activities", {
  // State
  state: () => ({
    activities: [] as Activity[],
    loading: false as boolean,
    error: null as string | null,
    filter: ActivityFilterEnum.FILTER_ALL as string,
  }),

  getters: {
    completedTodos(state): Activity[] {
      if (state.filter === ActivityFilterEnum.FILTER_COMPLETED) {
        return state.activities.filter((activity) => activity.completed);
      }
      return state.activities; // Always return the state directly
    },
    tasksComplete(state): number {
      return state.activities.filter((activity) => activity.completed).length;
    },

    tasksLeftToComplete(state): number {
      return state.activities.filter((activity) => !activity.completed).length;
    },
  },

  // Actions
  actions: {
    // get activities
    async getActivities() {
      this.loading = true;
      try {
        const response = (await ActivityService.fetchActivity()) as Activity[];

        this.activities = response;
      } catch (err: any) {
        this.error = err.message || "Failed to fetch activities";
      } finally {
        this.loading = false;
      }
    },

    async addActivity(description: string) {
      try {
        const response = (await ActivityService.addActivity(
          description
        )) as Activity[];
        this.activities.unshift({
          _id: response._id,
          description: response.description,
          completed: false,
        });
      } catch (err: any) {
        this.error = err.message || "Failed to add activity";
      }
    },

    // update activity
    async toggleActivity(id: number, completed: boolean) {
      try {
        await ActivityService.updateActivity(id, !completed);

        const activity = this.activities.find((a) => a._id === id);
        if (activity) activity.completed = !completed;
      } catch (err: any) {
        this.error = err.message || "Failed to toggle activity";
      }
    },

    // delete activity
    async deleteActivity(id: number) {
      try {
        (await ActivityService.deleteActivity(id)) as Activity[];

        this.activities = this.activities.filter((a) => a._id !== id);
      } catch (err: any) {
        this.error = err.message || "Failed to delete activity";
      }
    },

    // filter activity
    setFilter(filter: string) {
      this.filter = filter;
    },
  },
});
