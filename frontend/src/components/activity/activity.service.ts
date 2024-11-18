import { AppConfigService, HttpClientService } from "../../../src/services";

class ActivityService {
  /**
   * fetch  activities
   * @returns
   */

  // add activity
  fetchActivity = () => {
    return HttpClientService.get(
      AppConfigService.AppServices.VIEWS.ACTIVITY.FETCHACTIVITIES
    );
  };

  addActivity = (description: string) => {
    const url = AppConfigService.AppServices.VIEWS.ACTIVITY.POSTACTIVITY;
    return HttpClientService.post(url, { description });
  };

  deleteActivity = (activityId: number) => {
    let url = AppConfigService.AppServices.VIEWS.ACTIVITY.DELETEACTIVITY;
    url = url.replace(":id", String(activityId));
    return HttpClientService.delete(url);
  };

  updateActivity(id: number, completed: boolean) {
    const url =
      AppConfigService.AppServices.VIEWS.ACTIVITY.UPDATEACTIVITY.replace(
        ":id",
        String(id)
      );
    return HttpClientService.put(url, { completed });
  }
}
const instance = new ActivityService();
export default instance;
