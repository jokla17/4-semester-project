import { Component } from "@angular/core";
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { SocketIOService } from "src/app/socketio.service";

@Component({
    selector : "app-linechart",
    templateUrl : "./linechart.component.html",
    styleUrls : ["./linechart.component.css"]
})
export class LinechartComponent {
    public lineChartData: ChartDataSets[] = [
        {
            data: [],
            label: "Total products",
            borderColor: 'rgba(13, 255, 0, 1)',
            backgroundColor: "rgba(13, 255, 0, 0.5)",
            lineTension: 0.2
        },
        {
            data: [],
            label: "Defective products",
            borderColor: 'rgba(243, 98, 98, 1)',
            backgroundColor: "rgba(243, 98, 98, 0.5)",
            lineTension: 0.2
        }
    ];
    public lineChartLabels: Label[] = [];
    public lineChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: getComputedStyle(document.documentElement).getPropertyValue('--third-text-color')
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Amount',
                    fontColor: getComputedStyle(document.documentElement).getPropertyValue('--third-text-color')
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: getComputedStyle(document.documentElement).getPropertyValue('--third-text-color')
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Time',
                    fontColor: getComputedStyle(document.documentElement).getPropertyValue('--third-text-color')
                }
            }]
        },
        title: {
            display: true,
            fontSize: 18,
            fontColor: getComputedStyle(document.documentElement).getPropertyValue('--third-text-color'),
            text: 'Produced products over time'
        },
        legend: {
            labels: {
                fontColor: getComputedStyle(document.documentElement).getPropertyValue('--third-text-color')
            }
        },
    };
    public lineChartLegend = true;
    public lineChartPlugins = [];
    public lineChartType = 'line';

    constructor(
        public socketIOService : SocketIOService
    ) {
        this.socketIOService.listen("selectLogs").subscribe((data) => {
            if (data != null) {
                this.initLineChart(data);
                document.getElementById("statsInput").style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--input-border-color');
            } else {
                document.getElementById("statsInput").style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--error-color');
            }
        })
    }

    public initLineChart(data: any): void {
        let time = [];
        for (let i = 0; i < data.ProdProcessedCount.length - 1; i++) {
            time[i] = i;
        }
        this.lineChartLabels = time;
        data.ProdProcessedCount.shift();

        this.lineChartData = [
            {
                data: data.ProdProcessedCount,
                label: "Total products",
                borderColor: 'rgba(13, 255, 0, 1)',
                backgroundColor: "rgba(13, 255, 0, 0.5)",
            },
            {
                data: data.ProdDefectiveCount,
                label: "Defective products",
                borderColor: 'rgba(243, 98, 98, 1)',
                backgroundColor: "rgba(243, 98, 98, 0.5)",
            }
        ];
    }
}