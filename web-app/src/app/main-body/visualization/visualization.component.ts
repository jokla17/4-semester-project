import { Component } from '@angular/core';
import { SocketIOService } from '../../socketio.service';

@Component({
    selector: 'app-visualization',
    templateUrl: './visualization.component.html',
    styleUrls: ['./visualization.component.css']
})

export class VisualizationComponent {

    public messages: String[] = this.socketIOService.getMessages();
    
    
    constructor(
        private socketIOService: SocketIOService
        ) {}

}