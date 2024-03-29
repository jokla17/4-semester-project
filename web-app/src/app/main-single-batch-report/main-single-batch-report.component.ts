import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SocketIOService } from "../socketio.service";

@Component({
    selector : "app-main-single-batch-report",
    templateUrl : "./main-single-batch-report.component.html",
    styleUrls : ["./main-single-batch-report.component.css"]
})
export class MainSingleBatchReport {
    public batch : any;
    public logs : any;

    constructor (
        private route : ActivatedRoute,
        private socketIOService : SocketIOService
    ){
        const routeParams = this.route.snapshot.paramMap;
        const batchIdFromRoute = Number(routeParams.get("batchId"));

        this.socketIOService.emit("selectBatch", batchIdFromRoute);
        this.socketIOService.listen("selectBatch").subscribe((data) => {
            if (data != null) {
                this.batch = data;
            }
        });

        this.socketIOService.emit("selectLogs", batchIdFromRoute);
        this.socketIOService.listen("selectLogs").subscribe((data) => {
            if (data != null) {
                this.logs = data;
            }
        });
    }
}