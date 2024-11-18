export interface Activity {
  _id: number;
  description: string;
  completed: boolean;
}

export interface ActivitiesState {
  activities: Activity[];
  // post: Record<number, Activity> | null;
  loading: boolean;
  loaded: boolean;
}
