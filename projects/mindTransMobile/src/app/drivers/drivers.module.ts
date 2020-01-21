import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DriversPageRoutingModule } from "./drivers-routing.module";

import { DriversPage } from "./pages/drivers/drivers.page";
import { MtDataServicesModule } from "mt-data-services";
import { DriversListComponent } from "./components/drivers-list/drivers-list.component";
import { EditDriverPageComponent } from "./pages/edit-driver-page/edit-driver-page.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriversPageRoutingModule,
    MtDataServicesModule
  ],
  declarations: [DriversPage, DriversListComponent, EditDriverPageComponent]
})
export class DriversPageModule {}
