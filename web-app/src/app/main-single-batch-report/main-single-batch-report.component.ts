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

    constructor (
        private route : ActivatedRoute,
        private socketIOService : SocketIOService
    ){
        const routeParams = this.route.snapshot.paramMap;
        const batchIdFromRoute = Number(routeParams.get("batchId"));

        this.socketIOService.emit("selectSpecificData", batchIdFromRoute);
        this.socketIOService.listen("selectSpecificData").subscribe((data) => {
            this.batch = data;
        });
    }
}