import { Component } from "@angular/core";
import { AssetsService } from "../assets.service";

@Component({
    selector : "app-main-navigation",
    templateUrl : "./main-navigation.component.html",
    styleUrls : ["./main-navigation.component.css"]
})
export class MainNavigationComponent {
    constructor (
        public assetsService : AssetsService
    ){}
}