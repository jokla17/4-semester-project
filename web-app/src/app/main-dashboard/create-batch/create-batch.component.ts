import { Component } from '@angular/core';
import { SocketIOService } from '../../socketio.service';
import { FormControl, FormBuilder } from '@angular/forms';
import { BatchService } from 'src/app/batch.service';

@Component({
    selector: 'app-create-batch',
    templateUrl: './create-batch.component.html',
    styleUrls: ['./create-batch.component.css']
})
export class CreateBatchComponent {
    public beerTypes: Map<number, String>;
    private speedTypes: number[];
    public startText;
    
    public messageForm = this.formBuilder.group({
        batchId: new FormControl(),
        productType: new FormControl(),
        productAmount: new FormControl(),
        machineSpeed: new FormControl(),
    });

    constructor(
        private formBuilder: FormBuilder,
        private socketIOService: SocketIOService,
        public batchService: BatchService
    ){
        this.beerTypes = new Map([[0, "Pilsner"], [1, "Wheat"], [2, "IPA"], [3, "Stout"], [4, "Ale"], [5, "Alcohol Free"]]);
        this.speedTypes = [435, 50, 85, 275, 65, 50];
        this.startText = "start";

        this.socketIOService.listen("insertData").subscribe(() => {
            this.startText = "start";
            this.batchService.disabled = false;
            document.getElementById("btnStart").classList.add("btnSuccess");
        })
    }

    public sendMessage(request: String): void {
        this.startText = "running...";
        this.batchService.disabled = true;
        document.getElementById("btnStart").classList.remove("btnSuccess");
        
        this.socketIOService.emit('selectBatch', null);
        this.messageForm.value.productType = Number(this.messageForm.value.productType);

        switch (this.messageForm.value.productType) {
            case 0:
                this.messageForm.value.machineSpeed = this.speedTypes[0];
                break;
            case 1:
                this.messageForm.value.machineSpeed = this.speedTypes[1];
                break;
            case 2:
                this.messageForm.value.machineSpeed = this.speedTypes[2];
                break;
            case 3:
                this.messageForm.value.machineSpeed = this.speedTypes[3];
                break;
            case 4:
                this.messageForm.value.machineSpeed = this.speedTypes[4];
                break;
            case 5:
                this.messageForm.value.machineSpeed = this.speedTypes[5];
                break;
        }

        switch (request) {
            case "start":
                this.socketIOService.emit('execute', this.messageForm.value);
                break;
        }

        this.messageForm.reset();
    }

    ngOnInit() {
        if (this.batchService.disabled) {
            this.startText = "running...";
            document.getElementById("btnStart").classList.remove("btnSuccess");
        }
    }
}