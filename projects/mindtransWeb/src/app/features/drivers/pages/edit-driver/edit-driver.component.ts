import { Component, OnInit } from "@angular/core";
import { DriversStore } from "mt-data-services";
import { ActivatedRoute, Router } from "@angular/router";
import { Driver } from "mt-data-services/lib/drivers/entities/Driver";
import { flatMap, map, switchMap } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "app-edit-driver",
  templateUrl: "./edit-driver.component.html",
  styleUrls: ["./edit-driver.component.scss"]
})
export class EditDriverComponent implements OnInit {
  driver$: Observable<Driver>;

  constructor(
    private driversStore: DriversStore,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.driver$ = this.driversStore.drivers.pipe(
      flatMap(() =>
        this.route.paramMap.pipe(
          map(params => this.driversStore.getDriver(params.get("driverId")))
        )
      )
    );
  }

  saveDriver(driver: Driver) {
    this.driversStore
      .editDriver(driver)
      .subscribe(() => this.router.navigate(["/drivers"]));
  }
}
