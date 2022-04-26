import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  Fdata!: FormGroup;

  constructor(
    private FB: FormBuilder,
    private api: ApiService,
    private alert: UiService
  ) {
    this.Fdata = this.FB.group({
      title: ['', Validators.required],
      img: ['', Validators.required],
      desc: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submit() {
    if (this.Fdata.valid) {
      this.api.addPost(this.Fdata.value).subscribe({
        next: () => {
          this.alert.setAlert({ msg: 'post has been inserted!', type: 'Y' });
        },
        error: (err) => {
          this.alert.setAlert({
            msg: 'an error ouccerd!',
            type: 'N',
          });
        },
      });
      this.Fdata.reset();
    } else {
      this.alert.setAlert({
        msg: 'pleses enter all required info!',
        type: 'N',
      });
    }
  }
}
