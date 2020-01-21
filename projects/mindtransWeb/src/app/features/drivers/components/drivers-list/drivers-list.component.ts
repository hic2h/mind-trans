import { Component, OnInit, Input } from "@angular/core";
import { Driver, DriversStore, UiStore } from "mt-data-services";

@Component({
  selector: "app-drivers-list",
  templateUrl: "./drivers-list.component.html",
  styleUrls: ["./drivers-list.component.scss"]
})
export class DriversListComponent implements OnInit {
  @Input() drivers: Driver[];
  constructor(public uiStore: UiStore) {}

  ngOnInit() {}
}
