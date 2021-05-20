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
                this.socketIOService.emit('execute', 'stop');
                break;
            case 'abort':
                this.socketIOService.emit('execute', 'abort');
                break;
            case 'reset':
                this.socketIOService.emit('execute', 'reset');
                break;
            case 'clear':
                this.socketIOService.emit('execute', 'clear');
                break;
        }        
    }
}