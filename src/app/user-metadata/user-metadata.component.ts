import { Component, OnInit } from '@angular/core';
import { AuthMetaService } from '../service/auth.service';


@Component({
  selector: 'app-metadata',
  template: `<div *ngIf="metadata">
    <pre>{{ metadata | json }}</pre>
  </div>`,
  styles: [],
})
export class UserMetadataComponent implements OnInit {

  constructor(private authMetaservis: AuthMetaService) {}

  ngOnInit(): void {
    this.authMetaservis.getAuth();
  }

  get metadata(){
    return this.authMetaservis.metadata;
  };
}
