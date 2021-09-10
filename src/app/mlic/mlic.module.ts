import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MlicComponent } from './mlic.component';
import {
  HttpMethod,
  NG_ENTITY_SERVICE_CONFIG,
  NgEntityServiceGlobalConfig
} from '@datorama/akita-ng-entity-service';

const routes: Routes = [
  {
    path: '',
    component: MlicComponent,
  }
]

@NgModule({
  declarations: [
    MlicComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: {
        baseUrl: 'https://5fdc6e02-bd80-412c-8798-5491f88f6e75.mock.pstmn.io/api/'
      }
    }
  ]
})
export class MlicModule { }
