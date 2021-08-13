import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PibotComponent } from './pibot/pibot.component';
import { WjOlapModule } from '@grapecity/wijmo.angular2.olap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from './service/data.service';
import { WjChartModule } from '@grapecity/wijmo.angular2.chart';
import { WjChartAnimationModule } from '@grapecity/wijmo.angular2.chart.animation';
import { FlexChartComponent } from './flex-chart/flex-chart.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserMetadataComponent } from './user-metadata/user-metadata.component';
import { UserComponent } from './user/user.component';
import { AuthMetaService } from './service/auth.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './nav/filter.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { myCustomTooltipDefaults } from './custom-tooltip-defaults';
import { ScreenItemComponent } from './screen-item/screen-item.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { DialogButtonComponent } from './dialog-button/dialog-button.component';
import { HotkeyService } from './service/hotkey.service';
import { F1ButtonComponent } from './f1-button/f1-button.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    DragDropComponent,
    PibotComponent,
    FlexChartComponent,
    AuthButtonComponent,
    UserProfileComponent,
    UserMetadataComponent,
    UserComponent,
    FilterPipe,
    ScreenItemComponent,
    ConfirmDialogComponent,
    DialogButtonComponent,
    F1ButtonComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTooltipModule,
    DragDropModule,
    WjOlapModule,
    NgbModule,
    WjChartModule,
    WjChartAnimationModule,
    PerfectScrollbarModule,
    AuthModule.forRoot({
      domain: 'testbass1.jp.auth0.com',
      clientId: 'uqjl1fxchpv5oTjGZQR9ZkuqJ6ledJom',
      audience: 'https://testbass1.jp.auth0.com/api/v2/',
      scope: 'read:current_user',
      httpInterceptor: {
        allowedList: [
          {
            // Match any request that starts 'https://dev-t-6wv33g.jp.auth0.com/api/v2/' (note the asterisk)
            uri: 'https://testbass1.jp.auth0.com/api/v2/*',
            tokenOptions: {
              // The attached token should target this audience
              audience: 'https://testbass1.jp.auth0.com/api/v2/',
              // The attached token should have these scopes
              scope: 'read:current_user'
            }
          }
        ]
      }
    }),
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    RouterModule
  ],
  providers: [
    DataService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults },
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG},
    AuthMetaService,
    HotkeyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
