import { DriverProfile } from "./DriverProfile";
import { DriverStatus } from "./DriverStatus";

export class Driver {
  id: string;
  email: string;
  profile: DriverProfile = new DriverProfile();
  status: DriverStatus = DriverStatus.available;
}
