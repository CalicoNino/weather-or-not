export default class WeatherClient {
  baseUrl: URL;

  latitude: string;

  longitude: string;

  constructor(latitude: string, longitude: string) {
    this.baseUrl = new URL(process.env.BASE_URl || "");
    this.latitude = latitude;
    this.longitude = longitude;
    this.baseUrl.searchParams.append("latitude", this.latitude);
    this.baseUrl.searchParams.append("longitude", this.longitude);
  }

  getUrl() {
    return this.baseUrl;
  }

  getLatitude() {
    return this.latitude;
  }

  getLongitude() {
    return this.longitude;
  }

  setLatitude(latitude: string) {
    this.latitude = latitude;
    this.baseUrl.searchParams.set("latitude", this.latitude);
  }

  setLongitude(longitude: string) {
    this.longitude = longitude;
    this.baseUrl.searchParams.set("longitude", this.longitude);
  }

  async getCurrentForecast() {
    this.baseUrl.searchParams.append("current_weather", "true");
    this.baseUrl.searchParams.append(
      "hourly",
      "temperature_2m,relativehumidity_2m,windspeed_10m"
    );
    // this.baseUrl.searchParams.append("forecast_days", "7");
    await fetch(this.baseUrl, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }
}
