import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminLayoutComponent } from "./layout/admin-layout/admin-layout.component";

const routes: Routes = [
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "drivers",
        loadChildren: () =>
          import("./features/drivers/drivers.module").then(m => m.DriversModule)
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "drivers"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
