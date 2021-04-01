import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import {SocketIOService} from './socketio.service'; 
import { CreateBatchComponent } from './main-body/create-batch/create-batch.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { VisualizationComponent } from './main-body/visualization/visualization.component';


@NgModule({
  declarations: [
    AppComponent, 
    MainHeaderComponent,
    MainFooterComponent,
    MainBodyComponent,
    CreateBatchComponent,
    VisualizationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SocketIOService],
  bootstrap: [AppComponent]
})
export class AppModule { }
