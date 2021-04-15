import { Component } from "@angular/core";
import { SocketIOService } from "src/app/socketio.service";
import { AssetsService } from "../../assets.service";

@Component({
    selector : "app-notifications",
    templateUrl : "./notifications.component.html",
    styleUrls : ["./notifications.component.css"]
})
export class NotificationsComponent {
    public notifications : String[];
    public numberOfNotifications : number;
    public hidden : boolean;
    public time : String;

    constructor(
        public assetsService : AssetsService,
        public socketIOService : SocketIOService
    ) {
        this.notifications = [];
        this.numberOfNotifications = this.notifications.length;
        this.hidden = false;

        this.socketIOService.listen("dbData").subscribe((data) => {
            this.notifications.push(data);
            this.numberOfNotifications = this.notifications.length;
        })
    }

    public changeHidden() : void {
        if (this.hidden == true) {
            this.hidden = false;
            this.notifications = [];
        } else if (this.hidden == false && this.notifications.length != 0) {
            this.hidden = true;
            this.numberOfNotifications = 0;
        }
    }
}