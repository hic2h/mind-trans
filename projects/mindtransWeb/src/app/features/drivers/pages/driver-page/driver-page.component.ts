import { Component, OnInit } from "@angular/core";
import { DriversStore } from "mt-data-services";

@Component({
  selector: "app-driver-page",
  templateUrl: "./driver-page.component.html",
  styleUrls: ["./driver-page.component.scss"]
})
export class DriverPageComponent implements OnInit {
  constructor(public driversStore: DriversStore) {}

  ngOnInit(): void {}
}
