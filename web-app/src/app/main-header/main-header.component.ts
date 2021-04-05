import { Component } from '@angular/core';
import { AssetsService } from '../assets.service';

@Component({
    selector: 'app-main-header',
    templateUrl: './main-header.component.html',
    styleUrls: ['./main-header.component.css']
})

export class MainHeaderComponent {
    constructor(
        public assetsService : AssetsService
    ) {}
}