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

    private messages: String[] = this.socketIOService.getMessages();

    constructor(
        private socketIOService: SocketIOService,
        private formBuilder: FormBuilder
        ) {}
    

    public sendMessage(request: String): void {
        switch (request) {
            default:
                this.socketIOService.sendRequest(this.messageForm.value);
                break;
            case 'stop':
                this.socketIOService.sendRequest('stop');
                break;
            case 'abort':
                this.socketIOService.sendRequest('abort');
                break;
            case 'reset':
                this.socketIOService.sendRequest('reset');
                break;
            case 'clear':
                this.socketIOService.sendRequest('clear');
                break;
        }        
    }
}