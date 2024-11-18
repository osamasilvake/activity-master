import { ActivityFilterEnum } from "./ActivityFilter.enum";
import { ActivityFilter } from "./ActivityFilter.interface";

export const filterList: ActivityFilter[] = [
  { name: "All", value: ActivityFilterEnum.FILTER_ALL, label: "All" },
  {
    name: "Completed",
    value: ActivityFilterEnum.FILTER_COMPLETED,
    label: "Completed",
  },
];
