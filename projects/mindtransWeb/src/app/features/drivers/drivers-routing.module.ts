import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DriverPageComponent } from "./pages/driver-page/driver-page.component";
import { NewDriverComponent } from "./pages/new-driver/new-driver.component";
import { EditDriverComponent } from "./pages/edit-driver/edit-driver.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: DriverPageComponent
  },
  {
    path: "edit/:driverId",
    pathMatch: "full",
    component: EditDriverComponent
  },
  {
    path: "new",
    pathMatch: "full",
    component: NewDriverComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule {}
