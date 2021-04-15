import { Component } from '@angular/core';
import { SocketIOService } from 'src/app/socketio.service';

@Component({
    selector: 'app-resources',
    templateUrl: './resources.component.html',
    styleUrls: ['./resources.component.css']
})

export class ResourcesComponent {
    public data: any;
    public maxResources: number;

    constructor(
        private socketIOService: SocketIOService
    ) {
        this.data = "";
        this.maxResources = 35000;

        this.socketIOService.listen("data").subscribe((data) => {
            this.data = data;
        })
    }

    public getResource(resource: String): Number {
        let i: number;

        switch (resource) {
            case "Barley":
                i = Number((this.data.Barley / this.maxResources * 100).toFixed(0));
                document.getElementById("resourceBarley").style.width = i + "%";
                break;
            case "Yeast":
                i = Number((this.data.Yeast / this.maxResources * 100).toFixed(0));
                document.getElementById("resourceYeast").style.width = i + "%";
                break;
            case "Hops":
                i = Number((this.data.Hops / this.maxResources * 100).toFixed(0));
                document.getElementById("resourceHops").style.width = i + "%";
                break;
            case "Malt":
                i = Number((this.data.Malt / this.maxResources * 100).toFixed(0));
                document.getElementById("resourceMalt").style.width = i + "%";
                break;
            case "Wheat":
                i = Number((this.data.Wheat / this.maxResources * 100).toFixed(0));
                document.getElementById("resourceWheat").style.width = i + "%";
                break;
        }

        return i;
    }
}