import { Component } from '@angular/core';
import { SocketIOService } from 'src/app/socketio.service';

@Component({
    selector: 'app-resources',
    templateUrl: './resources.component.html',
    styleUrls: ['./resources.component.css']
})

export class ResourcesComponent {
    constructor(
        private socketIOService: SocketIOService
    ) {}
}