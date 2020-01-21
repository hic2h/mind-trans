import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { UiStore } from "./ui/store/ui-store.service";

export interface Endpoint {
  url: string;
  message: string;
}
const baseUrl = "http://localhost:3000";
@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient, private uiStore: UiStore) {}

  private request(
    method: string,
    endpoint: Endpoint,
    body?: any
  ): Observable<any> {
    const url = `${baseUrl}${endpoint.url}`;
    this.uiStore.startBackendAction(endpoint.message);
    return this.http
      .request(method, url, {
        body
      })
      .pipe(
        tap(() => this.uiStore.endBackendAction()),
        catchError(err => {
          this.uiStore.showError(err);
          return err;
        })
      );
  }

  public get<T>(endpoint: Endpoint): Observable<T[]> {
    return this.request("GET", endpoint);
  }

  public post<T>(endpoint: Endpoint, body: T): Observable<T> {
    return this.request("POST", endpoint, body);
  }

  public put<T>(endpoint: Endpoint, body: T): Observable<T> {
    return this.request("PUT", endpoint, body);
  }
}
