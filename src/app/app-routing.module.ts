import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { FlexChartComponent } from './flex-chart/flex-chart.component';
import { PibotComponent } from './pibot/pibot.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { UserComponent } from './user/user.component';
import { UserTypeGuard } from './guard/user-type.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashdoard', pathMatch: 'full' },
  {path: 'dd', component: DragDropComponent, canActivate: [AuthGuard] },
  {path: 'dashdoard', component: DashboardComponent, canActivate: [AuthGuard] },
  {path: 'pibot', component: PibotComponent, canActivate: [AuthGuard, UserTypeGuard] },
  {path: 'chart', component: FlexChartComponent, canActivate: [AuthGuard, UserTypeGuard] },
  {path: 'user', component: UserComponent, canActivate: [AuthGuard] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
