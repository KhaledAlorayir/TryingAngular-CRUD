import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Alert } from '../Interfaces';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private alert: Alert | null = null;
  private subject = new Subject();

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  setAlert(alert: Alert): void {
    this.alert = alert;
    this.subject.next(this.alert);
  }

  clearAlert(): void {
    this.alert = null;
    this.subject.next(this.alert);
  }

  constructor() {}
}
