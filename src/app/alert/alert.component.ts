import { Component, OnInit } from '@angular/core';
import { UiService } from '../services/ui.service';
import { Subscription } from 'rxjs';
import { Alert } from '../Interfaces';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  alert: Alert | null = null;
  subscription: Subscription;

  constructor(private ui: UiService) {
    this.subscription = this.ui.getAlert().subscribe((v) => (this.alert = v));
  }

  ngOnInit(): void {}
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  CloseHandler() {
    this.ui.clearAlert();
  }
}
