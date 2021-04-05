import { Component } from "@angular/core";
import { AssetsService } from "../../assets.service";

@Component({
    selector : "app-notifications",
    templateUrl : "./notifications.component.html",
    styleUrls : ["./notifications.component.css"]
})
export class NotificationsComponent {
    constructor(
        public assetsService : AssetsService
    ) {}
}