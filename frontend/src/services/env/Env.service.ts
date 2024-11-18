class EnvService {
  get envAppActivityUrl() {
    return import.meta.env.VITE_APP_BASE_URL || "";
  }
}
export default EnvService;
