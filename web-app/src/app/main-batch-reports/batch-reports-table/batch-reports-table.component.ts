import { Component } from '@angular/core';
import { SocketIOService } from 'src/app/socketio.service';

@Component({
    selector : "app-batch-reports-table",
    templateUrl : "./batch-reports-table.component.html",
    styleUrls : ["./batch-reports-table.component.css"]
})
export class BatchReportsTable {
    public batchReports : Map<number, String>; 

    constructor(
        private socketIOService : SocketIOService
    ){
        this.socketIOService.emitToDatabase();

        this.socketIOService.listenToDatabase().subscribe((data : any) => {
            this.batchReports = data;
        })
    }
}