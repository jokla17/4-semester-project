import { Component } from '@angular/core';
import { SocketIOService } from '../../socketio.service';
@Component({
    selector: 'app-operations',
    templateUrl: './operations.component.html',
    styleUrls: ['./operations.component.css']
})

export class OperationsComponent {
    constructor(
        private socketIOService: SocketIOService       
    ){}

    public sendMessage(request: String): void {
        switch (request) {
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