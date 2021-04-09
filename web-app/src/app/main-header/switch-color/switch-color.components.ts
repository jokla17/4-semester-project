import { Component } from '@angular/core';
import { AssetsService } from 'src/app/assets.service';

@Component({
    selector: "app-switch-color",
    templateUrl: "./switch-color.component.html",
    styleUrls: ["./switch-color.component.css"]
})
export class SwitchColorComponent {
    private darkThemeColors: Map<String, String>;
    private lightThemeColors: Map<String, String>;
    private switched : boolean = false;

    
    constructor(
        private assetsService : AssetsService
    ){
        this.lightThemeColors = new Map<String, String>([
            ["--body-bg-color", "#f4f6fa"],
            ["--primary-text-color", "#000000"],
            ["--secondary-text-color", "#ffffff"],
            ["--third-text-color", "#666766"],
            ["--header-bg-color", "#dfe4ea"],
            ["--navigation-bg-color", "#d1d6e0"],
            ["--navigation-hover-color", "#f59d19"],
            ["--btn-success-bg-color", "#53b36e"],
            ["--btn-success-border-color", "#31ac60"],
            ["--btn-warning-bg-color", "#3996d3"],
            ["--btn-warning-border-color", "#2a81bb"],
            ["--primary-meter-bg-color", "#f49d16"],
            ["--secondary-meter-bg-color", "#354a5e"],
            ["--meter-back-bg-color", "#d0d6e0"],
            ["--bell-alert-bg-color", "#f59d19"],
            ["--notification-alert-bg-color", "#31ac60"],
            ["--notification-bg-color", "#dfe4ea"],
            ["--notification-header-bg-color", "#666766"],
            ["--notification-line-color", "#666766"],
            ["--notification-hover-color", "#f59d19"],
            ["--container-bg-color", "#ffffff"],
            ["--search-bg-color", "#d0d6e0"],
            ["--switch-color", "#666766"],
            ["--switch-bg-color", "#ffffff"],
            ["--input-border-color", "#bababa"],
            ["--input-border-bg-color", "#ffffff"],
            ["--footer-bg-color", "rgba(255, 255, 255, 0.75)"]
        ]);
        this.darkThemeColors = new Map<String, String>([
            ["--body-bg-color", "#2c3e50"],
            ["--primary-text-color", "#ffffff"],
            ["--secondary-text-color", "#ffffff"],
            ["--third-text-color", "#ffffff"],
            ["--header-bg-color", "#3d5369"],
            ["--navigation-bg-color", "#34495e"],
            ["--navigation-hover-color", "#f59d19"],
            ["--btn-success-bg-color", "#53b36e"],
            ["--btn-success-border-color", "#31ac60"],
            ["--btn-warning-bg-color", "#3996d3"],
            ["--btn-warning-border-color", "#2a81bb"],
            ["--primary-meter-bg-color", "#f49d16"],
            ["--secondary-meter-bg-color", "#718093"],
            ["--meter-back-bg-color", "#2c3e50"],
            ["--bell-alert-bg-color", "#f59d19"],
            ["--notification-alert-bg-color", "#31ac60"],
            ["--notification-bg-color", "#3d5369"],
            ["--notification-header-bg-color", "#2c3e50"],
            ["--notification-line-color", "#666766"],
            ["--notification-hover-color", "#f59d19"],
            ["--container-bg-color", "#354a5e"],
            ["--search-bg-color", "#2c3e50"],
            ["--switch-color", "#ffffff"],
            ["--switch-bg-color", "#2c3e50"],
            ["--input-border-color", "#2b3d4f"],
            ["--input-border-bg-color", "#354a5e"],
            ["--footer-bg-color", "rgba(0, 0, 0, 0.75)"]
        ]);
    }

    public changeTheme(): void {
        if (this.switched == false) {
            document.getElementById("dot").style.transition = ".4s";
            document.getElementById("dot").style.transform = "translate(23px)";

            this.assetsService.changeAssets("dark");
            for (let [key, value] of this.darkThemeColors) {
                document.documentElement.style.setProperty(key.toString(), value.toString());
            }
            
            this.switched = true;
        } else if (this.switched) {
            document.getElementById("dot").style.transition = ".4s";
            document.getElementById("dot").style.transform = "translate(1px)";

            this.assetsService.changeAssets("light");
            for (let [key, value] of this.lightThemeColors) {
                document.documentElement.style.setProperty(key.toString(), value.toString());
            }

            this.switched = false
        }
    }
}