import { Component } from '@angular/core';
import { AssetsService } from 'src/app/assets.service';
import { SocketIOService } from '../../socketio.service';

@Component({
    selector: 'app-visualization',
    templateUrl: './visualization.component.html',
    styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent {
    public realtimeData: any[];

    constructor(
        private socketIOService : SocketIOService,
        public assetsService : AssetsService
    ){
        this.realtimeData = [""];
    }

    public ngOnInit() : void {
        this.socketIOService.listen("data").subscribe((data) => {
            this.realtimeData.push(data);
        })
    }
}