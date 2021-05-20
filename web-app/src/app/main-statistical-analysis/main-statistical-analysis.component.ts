import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SocketIOService } from '../socketio.service';

@Component({
    selector: "app-statistical-analysis",
    templateUrl: "./main-statistical-analysis.component.html",
    styleUrls: ["./main-statistical-analysis.component.css"]
})
export class MainStatisticalAnalysis {
    public statsForm = this.formBuilder.group({
        batchValue: new FormControl(),
    })

    constructor(
        private socketIOService: SocketIOService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
    ) {
        const routeParams = this.route.snapshot.paramMap;
        const batchIdFromRoute = Number(routeParams.get("batchId"));
        if (batchIdFromRoute != 0) {
            this.socketIOService.emit("selectLogs", batchIdFromRoute);
        }
    }

    public findBatch(): void {
        this.socketIOService.emit("selectLogs", Number(this.statsForm.value.batchValue));
    }
}