import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SocketIOService } from './socketio.service'; 

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component'
import { CreateBatchComponent } from './main-dashboard/create-batch/create-batch.component';
import { VisualizationComponent } from './main-dashboard/visualization/visualization.component';
import { SwitchColorComponent } from './main-header/switch-color/switch-color.components';
import { SearchBarComponent } from './main-header/search-bar/search-bar.component';
import { NotificationsComponent } from './main-header/notifications/notifications.component';
import { OperationsComponent } from './main-dashboard/operations/operations.component';
import { ResourcesComponent } from './main-dashboard/resources/resources.component';
import { MaintenanceComponent } from './main-dashboard/maintenance/maintenance.component';
import { MainBatchReports } from './main-batch-reports/main-batch-reports.component';
import { MainStatisticalAnalysis } from './main-statistical-analysis/main-statistical-analysis.component';
import { AssetsService } from './assets.service';
import { BatchReportsTable } from './main-batch-reports/batch-reports-table/batch-reports-table.component';
import { MainSingleBatchReport } from './main-single-batch-report/main-single-batch-report.component';

@NgModule({
  declarations: [
    AppComponent, // Root 

    MainHeaderComponent, // Default page components
    MainNavigationComponent,
    MainFooterComponent,

    MainDashboardComponent, // Dashboard page components
    CreateBatchComponent,
    VisualizationComponent,
    SwitchColorComponent,
    SearchBarComponent,
    NotificationsComponent,
    OperationsComponent,
    ResourcesComponent,
    MaintenanceComponent,

    MainBatchReports, // Batch reports page components
    BatchReportsTable,
  
    MainSingleBatchReport, // Single Batch Report

    MainStatisticalAnalysis, // Statistical analysis page components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: MainDashboardComponent },
      { path: 'dashboard', component: MainDashboardComponent },
      { path: 'batch-reports', component: MainBatchReports },
      { path: 'statistical-analysis', component: MainStatisticalAnalysis },
      { path: 'batch-report/:batchId', component: MainSingleBatchReport }
    ]),
  ],
  providers: [ SocketIOService, AssetsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
