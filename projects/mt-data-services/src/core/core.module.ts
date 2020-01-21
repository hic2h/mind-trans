import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { UiModule } from "./ui/ui.module";

@NgModule({
  declarations: [],
  imports: [UiModule, CommonModule, HttpClientModule]
})
export class CoreModule {}
