import { Component, OnInit } from "@angular/core";
import { DriversStore, Driver } from "mt-data-services";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-driver",
  templateUrl: "./new-driver.component.html",
  styleUrls: ["./new-driver.component.scss"]
})
export class NewDriverComponent implements OnInit {
  constructor(private driversStore: DriversStore, private router: Router) {}

  ngOnInit() {}

  createDriver(driver: Driver) {
    this.driversStore
      .addDriver(driver)
      .subscribe(() => this.router.navigate(["/drivers"]));
  }
}
