import { Component } from '@angular/core';

@Component({
    selector: 'app-main-header',
    templateUrl: './main-header.component.html',
    styleUrls: ['./main-header.component.css']
})

export class MainHeaderComponent {

    public getName(firstname: String, lastname: String): void {
        console.log(firstname, lastname)
    }
}