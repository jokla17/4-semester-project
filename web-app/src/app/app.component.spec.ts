import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AssetsService } from './assets.service';
import { MainBatchReports } from './main-batch-reports/main-batch-reports.component';
import { CreateBatchComponent } from './main-dashboard/create-batch/create-batch.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { MainStatisticalAnalysis } from './main-statistical-analysis/main-statistical-analysis.component';
import { SocketIOService } from './socketio.service';
import { SearchBarComponent } from './main-header/search-bar/search-bar.component';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainHeaderComponent,
        MainBatchReports,
        MainDashboardComponent,
        MainFooterComponent,
        MainNavigationComponent,
        MainStatisticalAnalysis,
        CreateBatchComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
      ],
      providers: [
        AssetsService,
        SocketIOService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Ajatek'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Ajatek');
  });


  it('should create the main-batch-reports component', () => {
    const fixture = TestBed.createComponent(MainBatchReports);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the main-dashboard component', () => {
    const fixture = TestBed.createComponent(MainDashboardComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should create the main-footer component', () => {
    const fixture = TestBed.createComponent(MainFooterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should create the main-header component', () => {
    const fixture = TestBed.createComponent(MainHeaderComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should create the main-navigation component', () => {
    const fixture = TestBed.createComponent(MainNavigationComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should create the main-statistical component', () => {
    const fixture = TestBed.createComponent(MainStatisticalAnalysis);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('create batch form invalid when empty', () => {
    const fixture = TestBed.createComponent(CreateBatchComponent);
    expect(fixture.componentInstance.messageForm.valid).toBeFalsy;
  });

  it('search form invalid when empty', () => {
    const fixture = TestBed.createComponent(SearchBarComponent);
    expect(fixture.componentInstance.searchForm.valid).toBeFalsy;
  });
});



