import {Component} from '@angular/core';
import {AreaChartData, DataPoint} from "./types/AreaChartData";

@Component({
    styles: [require('./second.scss')],
    template: `    
           <h3>Juyo prototype</h3>
           <blp-area-chart class="chrt" [forecastData]="visibleForecastData" [otbData]="visibleOtbData"></blp-area-chart>
           <div class="btns">
               <button class="btn" (mouseenter)="backwardMouseEnter()" (mouseleave)="backwardMouseLeave()" ><</button>
               <button class="btn" (mouseenter)="forwardMouseEnter()" (mouseleave)="forwardMouseLeave()">></button>
           </div>
    `
})
export class SecondPage {

    private forecastData: DataPoint[];
    private otbData: DataPoint[];
    private dataStart = 0;

    private visibleForecastData: AreaChartData;
    private visibleOtbData: AreaChartData;

    private forwardInterval: any;
    private backwardInterval: any;

    constructor() {
        this.forecastData =
            [
                new DataPoint(new Date(2017, 4, 1, 0, 0, 0, 0).getTime(), 14),
                new DataPoint(new Date(2017, 4, 2, 0, 0, 0, 0).getTime(), 7),
                new DataPoint(new Date(2017, 4, 3, 0, 0, 0, 0).getTime(), 16),
                new DataPoint(new Date(2017, 4, 4, 0, 0, 0, 0).getTime(), 9),
                new DataPoint(new Date(2017, 4, 5, 0, 0, 0, 0).getTime(), 12),
                new DataPoint(new Date(2017, 4, 6, 0, 0, 0, 0).getTime(), 18),
                new DataPoint(new Date(2017, 4, 7, 0, 0, 0, 0).getTime(), 14),
                new DataPoint(new Date(2017, 4, 8, 0, 0, 0, 0).getTime(), 11),
                new DataPoint(new Date(2017, 4, 9, 0, 0, 0, 0).getTime(), 22),
                new DataPoint(new Date(2017, 4, 10, 0, 0, 0, 0).getTime(), 15),
                new DataPoint(new Date(2017, 4, 11, 0, 0, 0, 0).getTime(), 6),
                new DataPoint(new Date(2017, 4, 12, 0, 0, 0, 0).getTime(), 8),
                new DataPoint(new Date(2017, 4, 13, 0, 0, 0, 0).getTime(), 13),
                new DataPoint(new Date(2017, 4, 14, 0, 0, 0, 0).getTime(), 25),
                new DataPoint(new Date(2017, 4, 15, 0, 0, 0, 0).getTime(), 7),
                new DataPoint(new Date(2017, 4, 16, 0, 0, 0, 0).getTime(), 9),
                new DataPoint(new Date(2017, 4, 17, 0, 0, 0, 0).getTime(), 10),
                new DataPoint(new Date(2017, 4, 18, 0, 0, 0, 0).getTime(), 13),
                new DataPoint(new Date(2017, 4, 19, 0, 0, 0, 0).getTime(), 17),
                new DataPoint(new Date(2017, 4, 20, 0, 0, 0, 0).getTime(), 20),
                new DataPoint(new Date(2017, 4, 21, 0, 0, 0, 0).getTime(), 15),
                new DataPoint(new Date(2017, 4, 22, 0, 0, 0, 0).getTime(), 13),
                new DataPoint(new Date(2017, 4, 23, 0, 0, 0, 0).getTime(), 8),
                new DataPoint(new Date(2017, 4, 24, 0, 0, 0, 0).getTime(), 6),
                new DataPoint(new Date(2017, 4, 25, 0, 0, 0, 0).getTime(), 15),
                new DataPoint(new Date(2017, 4, 26, 0, 0, 0, 0).getTime(), 11),
                new DataPoint(new Date(2017, 4, 27, 0, 0, 0, 0).getTime(), 9),
                new DataPoint(new Date(2017, 4, 28, 0, 0, 0, 0).getTime(), 8),
                new DataPoint(new Date(2017, 4, 29, 0, 0, 0, 0).getTime(), 9),
                new DataPoint(new Date(2017, 4, 30, 0, 0, 0, 0).getTime(), 13)
            ];

        this.otbData =
            [
                new DataPoint(new Date(2017, 4, 1, 0, 0, 0, 0).getTime(), 10),
                new DataPoint(new Date(2017, 4, 2, 0, 0, 0, 0).getTime(), 6),
                new DataPoint(new Date(2017, 4, 3, 0, 0, 0, 0).getTime(), 14),
                new DataPoint(new Date(2017, 4, 4, 0, 0, 0, 0).getTime(), 8),
                new DataPoint(new Date(2017, 4, 5, 0, 0, 0, 0).getTime(), 11),
                new DataPoint(new Date(2017, 4, 6, 0, 0, 0, 0).getTime(), 17),
                new DataPoint(new Date(2017, 4, 7, 0, 0, 0, 0).getTime(), 8),
                new DataPoint(new Date(2017, 4, 8, 0, 0, 0, 0).getTime(), 9),
                new DataPoint(new Date(2017, 4, 9, 0, 0, 0, 0).getTime(), 20),
                new DataPoint(new Date(2017, 4, 10, 0, 0, 0, 0).getTime(), 14),
                new DataPoint(new Date(2017, 4, 11, 0, 0, 0, 0).getTime(), 5),
                new DataPoint(new Date(2017, 4, 12, 0, 0, 0, 0).getTime(), 7),
                new DataPoint(new Date(2017, 4, 13, 0, 0, 0, 0).getTime(), 10),
                new DataPoint(new Date(2017, 4, 14, 0, 0, 0, 0).getTime(), 20),
                new DataPoint(new Date(2017, 4, 15, 0, 0, 0, 0).getTime(), 5),
                new DataPoint(new Date(2017, 4, 16, 0, 0, 0, 0).getTime(), 7),
                new DataPoint(new Date(2017, 4, 17, 0, 0, 0, 0).getTime(), 8),
                new DataPoint(new Date(2017, 4, 18, 0, 0, 0, 0).getTime(), 11),
                new DataPoint(new Date(2017, 4, 19, 0, 0, 0, 0).getTime(), 15),
                new DataPoint(new Date(2017, 4, 20, 0, 0, 0, 0).getTime(), 16),
                new DataPoint(new Date(2017, 4, 21, 0, 0, 0, 0).getTime(), 12),
                new DataPoint(new Date(2017, 4, 22, 0, 0, 0, 0).getTime(), 11),
                new DataPoint(new Date(2017, 4, 23, 0, 0, 0, 0).getTime(), 6),
                new DataPoint(new Date(2017, 4, 24, 0, 0, 0, 0).getTime(), 5),
                new DataPoint(new Date(2017, 4, 25, 0, 0, 0, 0).getTime(), 8),
                new DataPoint(new Date(2017, 4, 26, 0, 0, 0, 0).getTime(), 10),
                new DataPoint(new Date(2017, 4, 27, 0, 0, 0, 0).getTime(), 8),
                new DataPoint(new Date(2017, 4, 28, 0, 0, 0, 0).getTime(), 7),
                new DataPoint(new Date(2017, 4, 29, 0, 0, 0, 0).getTime(), 7),
                new DataPoint(new Date(2017, 4, 30, 0, 0, 0, 0).getTime(), 11)
            ];
        this.drawChart();
    }

    private forwardMouseEnter() {
        this.forwardInterval = setInterval(function () {
            if (this.dataStart >= 0 && this.dataStart + 10 < this.forecastData.length) {
                this.dataStart++;
            }
            this.drawChart();
        }.bind(this), 200);
    }

    private forwardMouseLeave() {
        clearInterval(this.forwardInterval);
    }

    private backwardMouseEnter() {
        this.backwardInterval = setInterval(function () {
            if (this.dataStart > 0 && this.dataStart + 10 <= this.forecastData.length) {
                this.dataStart--;
            }
            this.drawChart();
        }.bind(this), 200);
    }

    private backwardMouseLeave() {
        clearInterval(this.backwardInterval);
    }

    private drawChart() {
        this.visibleForecastData = new AreaChartData(this.forecastData.slice(this.dataStart, this.dataStart + 10));
        this.visibleOtbData = new AreaChartData(this.otbData.slice(this.dataStart, this.dataStart + 10));
    }
}