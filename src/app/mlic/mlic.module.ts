import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//外部ライブラリ
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


// コンポーネント
import { MlicListComponent } from './mlic-list/mlic-list.component';
import { MlicShowComponent } from './mlic-show/mlic-show.component';
import { MlicPostComponent } from './mlic-post/mlic-post.component';
import { MlicPutComponent } from './mlic-put/mlic-put.component';
import { MlicFormComponent } from './mlic-form/mlic-form.component';


const routes: Routes = [
  {
    path: 'show/:id',
    component: MlicShowComponent
  },
  {
    path: 'edit/:id',
    component: MlicPutComponent
  },
  {
    path: 'create',
    component: MlicPostComponent
  },
  {
    path: '/edit',
    component: MlicPutComponent
  },
  {
    path: '',
    component: MlicListComponent,
  },

]

@NgModule({
  declarations: [
    MlicListComponent,
    MlicShowComponent,
    MlicPostComponent,
    MlicPutComponent,
    MlicFormComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
  ]
})
export class MlicModule { }
