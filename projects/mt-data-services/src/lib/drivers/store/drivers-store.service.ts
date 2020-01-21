import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Driver } from "../entities/Driver";
import { DriversApiService } from "../api/drivers-api/drivers-api.service";

import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DriversStore {
  private _drivers: BehaviorSubject<Driver[]> = new BehaviorSubject([]);

  constructor(private driversApi: DriversApiService) {
    this.initDriversStore();
  }

  get drivers() {
    return this._drivers.asObservable();
  }

  getDriver(driverId): Driver {
    const drivers = this._drivers.getValue();
    const index = drivers.findIndex(driver => driver.id === driverId);
    return index > -1 ? drivers[index] : null;
  }

  initDriversStore() {
    this.driversApi
      .getAllDrivers()
      .subscribe(drivers => this._drivers.next(drivers));
  }

  addDriver(driver: Driver) {
    return this.driversApi
      .addDriver(driver)
      .pipe(
        tap(savedDriver =>
          this._drivers.next([...this._drivers.getValue(), ...[savedDriver]])
        )
      );
  }

  editDriver(driver: Driver) {
    return this.driversApi.editDriver(driver).pipe(
      tap(updatedDriver => {
        const drivers = this._drivers.getValue();
        const index = drivers.findIndex(items => items.id === driver.id);
        drivers.splice(index, 1, driver);

        this._drivers.next(drivers);
      })
    );
  }
}
