import EnvService from "../env/Env.service";

class AppConfigService extends EnvService {
  /**
   * services
   */

  get AppServices() {
    return {
      VIEWS: {
        ACTIVITY: {
          FETCHACTIVITIES: `${this.envAppActivityUrl}/activities`,
          POSTACTIVITY: `${this.envAppActivityUrl}/activity/add`,
          DELETEACTIVITY: `${this.envAppActivityUrl}/activity/:id`,
          UPDATEACTIVITY: `${this.envAppActivityUrl}/activity/:id`,
        },
      },
    };
  }
}
const instance = new AppConfigService();
export default instance;
