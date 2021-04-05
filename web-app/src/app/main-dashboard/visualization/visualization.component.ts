import { Component } from '@angular/core';
import { AssetsService } from 'src/app/assets.service';
import { SocketIOService } from '../../socketio.service';

@Component({
    selector: 'app-visualization',
    templateUrl: './visualization.component.html',
    styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent {
    public messages : String[];

    constructor(
        private socketIOService : SocketIOService,
        public assetsService : AssetsService
    ){
        this.messages = this.socketIOService.getMessages();
    }
}