import {Component, OnChanges, Input, ElementRef, ViewChild, OnInit, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';
import * as Moment from 'moment';
import {AreaChartData, DataPoint} from "../types/AreaChartData";

@Component({
    selector: 'blp-area-chart',
    template: `<div #container class="d3-chart"></div>`,
    encapsulation: ViewEncapsulation.None,
    styles: [require('./area-chart.scss')]
})
export class AreaChartComponent implements OnChanges, OnInit {
    @Input()
    public forecastData: AreaChartData;

    @Input()
    public otbData: AreaChartData;

    @ViewChild('container')
    private container: ElementRef;

    private htmlElement: HTMLElement;

    private host: any;
    private svg: any;
    private margin: any;
    private chart: any;
    private width: number;
    private height: number;
    private xScale: any;
    private yScale: any;
    private xAxis: any;
    private yAxis: any;

    public ngOnInit() {

        this.htmlElement = this.container.nativeElement;
        this.host = d3.select(this.htmlElement);

        this.setupChart();

        if (this.forecastData && this.otbData) {
            this.updateChart(true);
        }
    }

    public ngOnChanges(): void {

        if (this.host && this.forecastData && this.otbData) {
            this.updateChart(false);
        }
    }

    private setupChart(): void {

        // setup width, height and margin
        this.margin = {top: 20, right: 40, bottom: 40, left: 40};
        this.width = this.htmlElement.clientWidth - this.margin.left - this.margin.right;
        this.height = this.htmlElement.clientHeight - this.margin.top - this.margin.bottom;

        // setup scales
        this.xScale = d3.scaleTime().range([0, this.width]);
        this.yScale = d3.scaleLinear().range([this.height, 0]);
    }

    private updateChart(firstTime: boolean) {

        this.buildSVG();
        this.populateChart(firstTime);
        this.drawXAxis();
        // this.drawYAxis();
    }

    private buildSVG(): void {

        this.host.html('');

        // build the SVG element
        this.svg = this.host.append('svg')
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    }

    private drawXAxis(): void {

        this.xAxis = d3.axisBottom(this.xScale)
            .ticks(d3.timeDay)
            .tickFormat((t) => Moment(t).format('MM/DD/YY').toUpperCase())
            .tickPadding(15);
        this.svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(this.xAxis);
    }

    private drawYAxis(): void {

        this.yAxis = d3.axisLeft(this.yScale)
            .tickPadding(10);
        this.svg.append('g')
            .attr('class', 'y axis')
            .call(this.yAxis)
            .append('text')
            .attr('transform', 'rotate(-90)');
    }

    private populateChart(firstTime: boolean) {

        // update scales based on forecast values
        this.xScale.domain(d3.extent(this.forecastData.data, (d: any) => d.x));
        this.yScale.domain([0, Math.max.apply(Math, this.forecastData.data.map((d) => d.y)) + 15]);

        // draw divider lines
        this.drawDividerLines();

        // draw areas
        this.drawArea(this.forecastData.data, 'forecast-area', "forecast-label", -10, firstTime);
        this.drawArea(this.otbData.data, 'otb-area', "otb-label", 20, firstTime);
    }

    private drawDividerLines() {

        let dividerLinePositions = [];
        for (let i = 1; i < this.forecastData.data.length; i++) {
            let linePosition = (this.forecastData.data[i].x + this.forecastData.data[i - 1].x) / 2;
            dividerLinePositions.push(linePosition);
        }

        this.svg.selectAll(".dividerLine")
            .data(dividerLinePositions)
            .enter()
            .append("line")
            .attr("class", "dividerLine")
            .attr("x1", (r: any) => this.xScale(r))
            .attr("x2", (r: any) => this.xScale(r))
            .attr("y1", 0)
            .attr("y2", 150)
            .style("stroke", "#ccc");
    }

    private drawArea(data: any[], areaClass: string, labelClass: string, labelOffset: number, firstTime: boolean) {

        // draw area
        let area = d3.area()
            .x((d: any) => this.xScale(d.x))
            .y0(this.height)
            .y1((d: any) => this.yScale(d.y));

        let x = this.svg.append('path')
            .datum(data)
            .attr('class', areaClass)
            .attr('d', area);

        if (firstTime) {
            x.transition()
                .duration(1500)
                .attrTween('d', function () {
                    let interpolator = d3.interpolateArray(data.map((d) => {
                        return new DataPoint(d.x, 0);
                    }), data);
                    return function (t: any) {
                        return area(interpolator(t));
                    };
                });
        }

        // draw labels
        let y = this.svg.selectAll(`.${labelClass}`)
            .data(data)
            .enter()
            .append("text")
            .attr("class", labelClass)
            .attr("text-anchor", "middle")
            .attr("x", (d: any) => {
                return this.xScale(d.x);
            })
            .attr("y", (d: any) => {
                return this.yScale(d.y) + labelOffset;
            })
            .text(function (d: any) {
                return "" + d.y;
            });

        if (firstTime) {
            y.style("opacity", 0)
                .transition()
                .duration(2000)
                .style("opacity", 1);
        }
    }
}