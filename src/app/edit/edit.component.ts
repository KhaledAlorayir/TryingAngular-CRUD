import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Post } from '../Interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  Fdata!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Post,
    private FB: FormBuilder,
    private api: ApiService,
    private model: MatDialogRef<EditComponent>
  ) {
    this.Fdata = this.FB.group({
      title: [data.title, Validators.required],
      desc: [data.desc, Validators.required],
    });
  }

  ngOnInit(): void {}

  update() {
    if (this.Fdata.valid) {
      const p: Post = {
        id: this.data.id,
        img: this.data.img,
        title: this.Fdata.value.title,
        desc: this.Fdata.value.desc,
      };
      this.api.updatePost(p).subscribe({
        next: () => {
          this.model.close({ type: 'updated', data: p });
        },
        error: () => {
          this.model.close({ type: 'error', data: p });
        },
      });
    }
  }
}
