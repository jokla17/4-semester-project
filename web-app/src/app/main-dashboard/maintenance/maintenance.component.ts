import { Component } from '@angular/core';
import { SocketIOService } from 'src/app/socketio.service';

@Component({
    selector: 'app-maintenance',
    templateUrl: './maintenance.component.html',
    styleUrls: ['./maintenance.component.css']
})

export class MaintenanceComponent {
    constructor(
        private socketIOService : SocketIOService
    ) {
      
    }

}