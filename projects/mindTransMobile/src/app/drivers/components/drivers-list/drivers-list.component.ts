import { Component, Input, OnInit } from "@angular/core";
import { Driver, UiStore } from "mt-data-services";

@Component({
  selector: "mo-drivers-list",
  templateUrl: "./drivers-list.component.html",
  styleUrls: ["./drivers-list.component.scss"]
})
export class DriversListComponent implements OnInit {
  @Input() drivers: Driver[];
  constructor(public uiStore: UiStore) {}

  ngOnInit() {}
}
