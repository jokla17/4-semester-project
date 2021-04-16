import { Component } from '@angular/core';
import { SocketIOService } from '../../socketio.service';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-create-batch',
    templateUrl: './create-batch.component.html',
    styleUrls: ['./create-batch.component.css']
})

export class CreateBatchComponent {
    public batch: any = "";
    public ids : number;
    public messageForm = this.formBuilder.group({
        batchId: new FormControl(),
        productType: new FormControl({ value: null }),
        productAmount: new FormControl({ value: null }),
        machineSpeed: new FormControl({ value: null }),
    });

    constructor(
        private socketIOService: SocketIOService,
        private formBuilder: FormBuilder
    ) {
        this.socketIOService.emit('selectSpecificData', null);
        this.socketIOService.listen("selectSpecificData").subscribe((data) => {
            this.batch = data;
            this.ids = data.BatchId;
        })
    }

    public sendMessage(request: String): void {
        this.socketIOService.emit('selectSpecificData', null);
        switch (request) {
            case "start":
                this.socketIOService.emit('execute', this.messageForm.value);
                break;
        }
    }
}