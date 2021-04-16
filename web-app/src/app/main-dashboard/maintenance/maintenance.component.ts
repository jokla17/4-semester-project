import { Component } from '@angular/core';
import { SocketIOService } from 'src/app/socketio.service';

@Component({
    selector: 'app-maintenance',
    templateUrl: './maintenance.component.html',
    styleUrls: ['./maintenance.component.css']
})

export class MaintenanceComponent {
    public data : any;
    public maxMaintenance : number;

    constructor(
        private socketIOService : SocketIOService
    ) {
        this.data = "";
        this.maxMaintenance = 65535;

        this.socketIOService.listen("data").subscribe((data) => {
            this.data = data;
        })
    }

    public getMaintenance() : number {
        let i : number = Number((this.data.Maintenance / this.maxMaintenance * 100).toFixed(0));
        document.getElementById("maintenanceMeter").style.width = i + "%";
        return i;
    } 
}
