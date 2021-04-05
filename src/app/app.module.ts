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
import {MatTooltipModule} from '@angular/material/tooltip';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
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
    AuthModule.forRoot({
      domain: 'dev-t-6wv33g.jp.auth0.com',
      clientId: 'd6iXdba84HnX7yvw6JpMJpWrohWHxrNZ',
      audience: 'https://dev-t-6wv33g.jp.auth0.com/api/v2/',
      scope: 'read:current_user',
      httpInterceptor: {
        allowedList: [
          {
            // Match any request that starts 'https://dev-t-6wv33g.jp.auth0.com/api/v2/' (note the asterisk)
            uri: 'https://dev-t-6wv33g.jp.auth0.com/api/v2/*',
            tokenOptions: {
              // The attached token should target this audience
              audience: 'https://dev-t-6wv33g.jp.auth0.com/api/v2/',
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
    })
  ],
  providers: [
    DataService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
    AuthMetaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
