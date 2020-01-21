import { Injectable } from "@angular/core";
import { HttpService, Endpoint } from "../../../../core/http-service.service";
import { Driver } from "../../entities/Driver";
import { Observable } from "rxjs";

const driverEndpoints = (message: string, id?: string): Endpoint => {
  return { message, url: id ? `/drivers/${id}` : "/drivers" };
};

@Injectable({
  providedIn: "root"
})
export class DriversApiService {
  constructor(private httpService: HttpService) {}

  public getAllDrivers(): Observable<Driver[]> {
    return this.httpService.get<Driver>(
      driverEndpoints("Fetching Drivers list")
    );
  }

  public addDriver(driver: Driver): Observable<Driver> {
    return this.httpService.post<Driver>(
      driverEndpoints("Adding new Driver"),
      driver
    );
  }

  public editDriver(driver: Driver): Observable<Driver> {
    return this.httpService.put<Driver>(
      driverEndpoints("Updating current Driver", driver.id),
      driver
    );
  }
}
