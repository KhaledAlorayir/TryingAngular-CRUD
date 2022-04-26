import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Post } from '../Interfaces';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post!: Post;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private modal: MatDialog,
    private alert: UiService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.api.getPost(id).subscribe({
      next: (v) => (this.post = v),
    });
  }

  openEdit() {
    const modalRef = this.modal.open(EditComponent, {
      width: '40%',
      data: this.post,
    });

    modalRef.afterClosed().subscribe((res) => {
      if (res.type === 'updated') {
        this.post = res.data;
        this.alert.setAlert({ msg: 'Post has been updated', type: 'Y' });
      } else {
        this.alert.setAlert({
          msg: 'an error has ouccerd!',
          type: 'N',
        });
      }
    });
  }
}
