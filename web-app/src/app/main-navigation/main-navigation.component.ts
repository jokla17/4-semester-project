import { Component } from "@angular/core";
import { AssetsService } from "../assets.service";

@Component({
    selector : "app-main-navigation",
    templateUrl : "./main-navigation.component.html",
    styleUrls : ["./main-navigation.component.css"]
})
export class MainNavigationComponent {
    public hideMobileNav;
    
    constructor (
        public assetsService : AssetsService
    ){
        this.hideMobileNav = false;
    }

    public showMobileNav() : void{
        if (this.hideMobileNav) {
            this.hideMobileNav = false
        } else {
            this.hideMobileNav = true;
        }
    }
 }