import { Component, OnInit } from "@angular/core";
import { DriversStore } from "mt-data-services";

@Component({
  selector: "app-drivers",
  templateUrl: "./drivers.page.html",
  styleUrls: ["./drivers.page.scss"]
})
export class DriversPage implements OnInit {
  constructor(public driversStore: DriversStore) {}

  ngOnInit() {}
}
