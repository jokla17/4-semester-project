import { Component } from "@angular/core";
import { AssetsService } from "src/app/assets.service";
import { SocketIOService } from "src/app/socketio.service";
import { FormControl, FormBuilder, Form } from '@angular/forms';

@Component({
    selector: "app-search-bar",
    templateUrl: "./search-bar.component.html",
    styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent {
    public searchBatch: any;
    private timeOut: any;
    public searchForm = this.formBuilder.group({
        searchValue: new FormControl(),
    })

    constructor(
        public assetsService: AssetsService,
        public socketIOService: SocketIOService,
        public formBuilder: FormBuilder,
    ) {
        this.searchBatch = "";

        this.socketIOService.listen("selectSpecificData").subscribe((data) => {
            this.searchBatch = data;
        })
    }

    public search(): void {
        clearTimeout(this.timeOut);

        this.timeOut = setTimeout(() => {
            let searchValue: number = Number(this.searchForm.value.searchValue);

            if (searchValue != null) {
                this.socketIOService.emit("selectSpecificData", Number(this.searchForm.value.searchValue.match(/\d+/g)));
                document.getElementById("batch").style.display = "block";
            } 
        }, 500);
    }

    public hide(): void {
        document.getElementById("batch").style.display = "none";
    }
}