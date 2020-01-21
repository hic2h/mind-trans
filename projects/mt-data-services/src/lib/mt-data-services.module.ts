import { NgModule } from "@angular/core";
import { DriversModule } from "./drivers/drivers.module";
import { CoreModule } from "../core/core.module";

@NgModule({
  imports: [DriversModule, CoreModule],
  exports: [DriversModule]
})
export class MtDataServicesModule {}
