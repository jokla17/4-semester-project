import { Component } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { SocketIOService } from "src/app/socketio.service";

@Component({
    selector: "app-barchart",
    templateUrl: "./barchart.component.html",
    styleUrls: ["./barchart.component.css"]
})
export class BarchartComponent {
    public barChartOptions: ChartOptions = {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: getComputedStyle(document.documentElement).getPropertyValue('--third-text-color'),
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Amount',
                    fontColor: getComputedStyle(document.documentElement).getPropertyValue('--third-text-color')
                }
            }]
        },
        title: {
            display: true,
            fontSize: 18,
            text: 'Total, defect and acceptable products',
            fontColor: getComputedStyle(document.documentElement).getPropertyValue('--third-text-color')
        },
        legend: {
            labels: {
                fontColor: getComputedStyle(document.documentElement).getPropertyValue('--third-text-color')
            }
        }
    };
    public barChartLabels: Label[] = [''];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartPlugins = [];
    public barChartData: ChartDataSets[] = [
        {
            data: [],
            label: 'Acceptable Products',
            backgroundColor: "rgba(13, 255, 0, 0.5)",
        },
        {
            data: [],
            label: 'Defect Products',
            backgroundColor: "rgba(243, 98, 98, 0.5)"
        }
    ];

    constructor(
        public socketIOService: SocketIOService
    ) {
        this.socketIOService.listen("selectLogs").subscribe((data) => {
            this.initBarChart(data);
        })
    }

    public initBarChart(data: any): void {
        this.barChartData = [
            {
                data: [data.ProdProcessedCount[data.ProdProcessedCount.length - 1]],
                label: 'Acceptable Products',
                backgroundColor: "rgba(13, 255, 0, 0.5)",
                hoverBackgroundColor : "rgba(13, 255, 0, 0.7)"
            },
            {
                data: [data.ProdDefectiveCount[data.ProdDefectiveCount.length - 1]],
                label: 'Defect Products',
                backgroundColor: "rgba(243, 98, 98, 0.5)",
                hoverBackgroundColor : "rgba(243, 98, 98, 0.7)"
            }
        ];
    }
}