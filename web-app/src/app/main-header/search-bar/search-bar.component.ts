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

        this.socketIOService.listen("selectBatch").subscribe((data) => {
            if (data != null) {
                this.searchBatch = data; 
            } else {
                document.getElementById("batch").style.display = "none";
                document.getElementById("searchInput").style.boxShadow = "inset 0px 0px 5px rgba(255, 63, 52, 1.0)";        
            }
        })
    }

    public search(): void {
        clearTimeout(this.timeOut);

        this.timeOut = setTimeout(() => {
            let searchValue: number = Number(this.searchForm.value.searchValue);

            if (searchValue != 0) {
                this.socketIOService.emit("selectBatch", Number(this.searchForm.value.searchValue.match(/\d+/g)));
                document.getElementById("searchInput").style.boxShadow = "inset 0px 0px 5px rgba(68, 68, 68, 0.1)";
                document.getElementById("batch").style.display = "block";
            } else {
                document.getElementById("batch").style.display = "none";
            }
        }, 500);
    }

    public hide(): void {
        document.getElementById("batch").style.display = "none";
    }
}