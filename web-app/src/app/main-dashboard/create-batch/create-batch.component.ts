import { Component } from '@angular/core';
import { SocketIOService } from '../../socketio.service';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-create-batch',
    templateUrl: './create-batch.component.html',
    styleUrls: ['./create-batch.component.css']
})

export class CreateBatchComponent {
    public beerTypes: Map<number, String>;


    public messageForm = this.formBuilder.group({
        batchId: new FormControl(),
        productType: new FormControl(),
        productAmount: new FormControl({ value: null }),
        machineSpeed: new FormControl({ value: null }),
    });

    constructor(
        private socketIOService: SocketIOService,
        private formBuilder: FormBuilder
    ) {
        this.beerTypes = new Map([[0, "Pilsner"], [1, "Wheat"], [2, "IPA"], [3, "Stout"], [4, "Ale"], [5, "Alcohol Free"]]);
    }

    public sendMessage(request: String): void {
        this.socketIOService.emit('selectSpecificData', null);
        this.messageForm.value.productType = Number(this.messageForm.value.productType);
        console.log(this.messageForm.value);

        switch (request) {
            case "start":
                this.socketIOService.emit('execute', this.messageForm.value);
                break;
        }
    }
}