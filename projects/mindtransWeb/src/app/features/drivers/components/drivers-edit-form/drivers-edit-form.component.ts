import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChange
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DriverStatus, Driver, UiStore } from "mt-data-services";

@Component({
  selector: "app-drivers-edit-form",
  templateUrl: "./drivers-edit-form.component.html",
  styleUrls: ["./drivers-edit-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DriversEditFormComponent implements OnInit, OnChanges {
  editDriverProfile: FormGroup;
  @Input("driver") driver: Driver;

  @Output()
  save: EventEmitter<Driver> = new EventEmitter();

  submitForm(driver: Driver): void {
    this.save.emit(driver);
  }

  constructor(private fb: FormBuilder, public uiStore: UiStore) {}

  ngOnInit(): void {
    if (!this.driver) {
      this.driver = new Driver();
    }
    this.buildForm();
  }

  ngOnChanges(changes) {
    this.buildForm();
  }

  private buildForm() {
    this.editDriverProfile = this.fb.group({
      id: [this.driver.id],
      email: [this.driver.email, [Validators.email, Validators.required]],
      status: [this.driver.status || DriverStatus.available],
      profile: this.fb.group({
        firstName: [this.driver.profile.firstName, [Validators.required]],
        lastName: [this.driver.profile.lastName, [Validators.required]],
        avatar: [this.driver.profile.avatar]
      })
    });
  }
}
