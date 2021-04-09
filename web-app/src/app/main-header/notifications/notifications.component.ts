import { Component } from "@angular/core";
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
    public date;
    public time : String;

    constructor(
        public assetsService : AssetsService
    ) {
        this.notifications = ["", "", ""]
        this.numberOfNotifications = this.notifications.length;
        this.hidden = false;
        this.date = new Date();
        this.time = this.date.getHours() + ":" 
        + this.date.getMinutes() + ":" + this.date.getSeconds();
    }

    public changeHidden() : void {
        if (this.hidden == true) {
            this.hidden = false;
        } else if (this.hidden == false && this.notifications.length != 0) {
            this.hidden = true;
            this.numberOfNotifications = 0;
        }
    }
}