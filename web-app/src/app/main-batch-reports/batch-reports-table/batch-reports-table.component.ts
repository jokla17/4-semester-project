import { Component } from '@angular/core';
import { SocketIOService } from 'src/app/socketio.service';

@Component({
    selector: "app-batch-reports-table",
    templateUrl: "./batch-reports-table.component.html",
    styleUrls: ["./batch-reports-table.component.css"]
})
export class BatchReportsTable {
    public BatchReports: Map<number, String>
    public span: number = 7;
    public back: number = 0
    public next: number = 7;
    public backAvailable : boolean = false;
    public nextAvailable : boolean = false;

    constructor(
        private socketIOService: SocketIOService
    ) {
        this.socketIOService.emit("selectAllData", null);
        this.socketIOService.listen("selectAllData").subscribe((data) => {
            this.BatchReports = new Map<number, String>(data.map(i => [i.BatchId, i]));
        })
    }

    public goNext(): void {
        if (this.next < this.BatchReports.size) {
            this.back = this.back + this.span;
            this.next = this.next + this.span;
        } 
    }

    public goBack(): void {
        if (this.back != 0) {
            this.back = this.back - this.span;
            this.next = this.next - this.span;
        } 
    }
}