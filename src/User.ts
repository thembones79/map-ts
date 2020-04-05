import faker from "faker";
import { Mappable } from "./CustomMap";

export default "red"; // default export in not used in TS by convention

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `User name: ${this.name}`;
  }
}
