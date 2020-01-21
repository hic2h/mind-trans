import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DriversPage } from "./pages/drivers/drivers.page";
import { EditDriverPageComponent } from "./pages/edit-driver-page/edit-driver-page.component";

const routes: Routes = [
  {
    path: "",
    component: DriversPage
  },
  {
    path: "edit/:driverId",
    component: EditDriverPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversPageRoutingModule {}
