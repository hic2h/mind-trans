import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { UiState } from "../entities/ui-state";

@Injectable({
  providedIn: "root"
})
export class UiStore {
  private _uiState: BehaviorSubject<UiState> = new BehaviorSubject(
    new UiState()
  );

  get uiState() {
    return this._uiState.asObservable();
  }

  startBackendAction(loadingMessage: string) {
    this._uiState.next({
      loading: true,
      loadingMessage,
      errorMessage: ""
    });
  }

  endBackendAction() {
    this._uiState.next({
      loading: false,
      loadingMessage: "",
      errorMessage: ""
    });
  }

  showError(errorMessage: string) {
    this._uiState.next({
      loading: false,
      loadingMessage: "",
      errorMessage
    });
  }
}
