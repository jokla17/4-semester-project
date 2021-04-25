import { Component, ElementRef } from '@angular/core';
import { SocketIOService } from '../../socketio.service';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-create-batch',
    templateUrl: './create-batch.component.html',
    styleUrls: ['./create-batch.component.css']
})
export class CreateBatchComponent {
    public beerTypes: Map<number, String>;
    public selectedValue;
    private speedTypes: number[];
    public startDisabled;
    public startText;
    
    public messageForm = this.formBuilder.group({
        batchId: new FormControl(),
        productType: new FormControl(),
        productAmount: new FormControl(),
        machineSpeed: new FormControl(),
    });

    constructor(
        private socketIOService: SocketIOService,
        private formBuilder: FormBuilder,
        public elementRef: ElementRef,
    ){
        this.beerTypes = new Map([[0, "Pilsner"], [1, "Wheat"], [2, "IPA"], [3, "Stout"], [4, "Ale"], [5, "Alcohol Free"]]);
        this.speedTypes = [435, 50, 85, 275, 65, 50];
        this.selectedValue = "";
        this.startDisabled = false;
        this.startText = "start";

        this.socketIOService.listen("insertData").subscribe(() => {
            this.startDisabled = false;
            this.startText = "start";
            this.elementRef.nativeElement.querySelector("#btnStart").classList.add("btnSuccess"); 
        })
    }

    public sendMessage(request: String): void {
        this.startDisabled = true;
        this.startText = "running...";
        this.elementRef.nativeElement.querySelector("#btnStart").classList.remove("btnSuccess"); 

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
        this.selectedValue = "";
    }
}