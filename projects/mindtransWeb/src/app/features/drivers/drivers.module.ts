import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DriverPageComponent } from "./pages/driver-page/driver-page.component";
import { DriversRoutingModule } from "./drivers-routing.module";
import { DriversListComponent } from "./components/drivers-list/drivers-list.component";
import { DriversEditFormComponent } from "./components/drivers-edit-form/drivers-edit-form.component";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { ReactiveFormsModule } from "@angular/forms";
import { MtDataServicesModule } from "mt-data-services";
import { NewDriverComponent } from "./pages/new-driver/new-driver.component";
import { EditDriverComponent } from "./pages/edit-driver/edit-driver.component";

@NgModule({
  declarations: [
    DriverPageComponent,
    DriversListComponent,
    DriversEditFormComponent,
    NewDriverComponent,
    EditDriverComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    DriversRoutingModule,
    MtDataServicesModule
  ]
})
export class DriversModule {}
