export interface Activity {
  _id: number;
  description: string;
  completed: boolean;
}

export interface ActivitiesState {
  activities: Activity[];
  loading: boolean;
  error: null | string;
  filter: string;
}
