import { Component } from "@angular/core";
import { AssetsService } from "src/app/assets.service";

@Component({
    selector : "app-search-bar",
    templateUrl : "./search-bar.component.html",
    styleUrls : ["./search-bar.component.css"]
})
export class SearchBarComponent {
    constructor(
        public assetsService : AssetsService
    ){}
}