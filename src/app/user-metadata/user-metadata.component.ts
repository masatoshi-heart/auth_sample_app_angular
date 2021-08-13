import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthMetaService } from '../service/auth.service';

@Component({
  selector: 'app-metadata',
  template: `<ng-container *ngIf="(metadata | async) as meta">
    <div>
      <span>ユーザー権限：</span>{{ meta.user_type  }}
    </div>
  </ng-container>`,
  styles: [],
})
export class UserMetadataComponent implements OnInit {

  constructor(private authMetaservis: AuthMetaService) {}

  ngOnInit(): void {
    this.authMetaservis.fetchMetadata();
  }

  get metadata() {
    return this.authMetaservis.metadata$;
  }
}
