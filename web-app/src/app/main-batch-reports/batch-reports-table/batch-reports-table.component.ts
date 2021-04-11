import { Component } from '@angular/core';
import { SocketIOService } from 'src/app/socketio.service';

@Component({
    selector : "app-batch-reports-table",
    templateUrl : "./batch-reports-table.component.html",
    styleUrls : ["./batch-reports-table.component.css"]
})
export class BatchReportsTable {
    public test : any[];

    constructor(
        private socketIOService : SocketIOService
    ){
        this.test.push(this.socketIOService.getDatabaseData());
        console.log(this.test);
    }
    
    public clickTest () : void {
        //this.socketIOService.getDatabaseData();
        console.log(this.socketIOService.getDatabaseData());
    }
}