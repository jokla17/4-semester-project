import { Component } from '@angular/core';
import { SocketIOService } from '../../socketio.service';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-create-batch',
    templateUrl: './create-batch.component.html',
    styleUrls: ['./create-batch.component.css']
})

export class CreateBatchComponent {
    public messageForm = this.formBuilder.group({
        batchId : new FormControl({value : null}),
        productType : new FormControl({value : null}),
        productAmount : new FormControl({value : null}),
        machineSpeed : new FormControl({value : null}), 
    })

    constructor(
        private socketIOService: SocketIOService,
        private formBuilder: FormBuilder
        ) {}
    
    public sendMessage(request: String): void {
        switch (request) {
            case "start":
                this.socketIOService.emit('execute', this.messageForm.value);
                break;
        }        
    }
}