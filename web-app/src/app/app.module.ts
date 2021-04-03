import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SocketIOService } from './socketio.service'; 

import { AppComponent } from './app.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { CreateBatchComponent } from './main-body/create-batch/create-batch.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { VisualizationComponent } from './main-body/visualization/visualization.component';
import { SwitchColorComponent } from './main-header/switch-color/switch-color.components';
import { SearchBarComponent } from './main-header/search-bar/search-bar.component';
import { NotificationsComponent } from './main-header/notifications/notifications.component';
import { OperationsComponent } from './main-body/operations/operations.component';
import { ResourcesComponent } from './main-body/resources/resources.component';
import { MaintenanceComponent } from './main-body/maintenance/maintenance.component';
import { NavigationComponent } from './main-navigation/main-navigation.component';

const routes: Routes = [
  { path: 'dashboard', component: CreateBatchComponent},
  { path: 'dashboard', component: VisualizationComponent},
  { path: 'dashboard', component: SwitchColorComponent},
  { path: 'dashboard', component: SearchBarComponent},
  { path: 'dashboard', component: NotificationsComponent},
  { path: 'dashboard', component: OperationsComponent},
  { path: 'dashboard', component: ResourcesComponent},
  { path: 'dashboard', component: MaintenanceComponent}
];

@NgModule({
  declarations: [
    AppComponent, 
    MainHeaderComponent,
    MainFooterComponent,
    MainBodyComponent,
    CreateBatchComponent,
    VisualizationComponent,
    SwitchColorComponent,
    SearchBarComponent,
    NotificationsComponent,
    OperationsComponent,
    ResourcesComponent,
    MaintenanceComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SocketIOService],
  bootstrap: [AppComponent]
})
export class AppModule { }
