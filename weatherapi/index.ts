export default class WeatherClient {
  baseUrl: string;

  latitude;

  longitude;

  constructor(latitude: string, longitude: string) {
    this.baseUrl = process.env.BASE_URl || "";
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
