import {Component} from '@angular/core';
import {HttpGatewayService} from "../core/services/http-gateway.service";

@Component({
    styles: [require('./first.scss')],
    template: `
       <h3>This is the first page</h3>
       <button (click)="onClick($event)">Make server call</button>
       <div class="result" [hidden]="!result">The server says '{{result}}'</div>
    `
})
export class FirstPage {
    private result: any;

    constructor(private httpGatewayService: HttpGatewayService) {
    }

    private onClick(event: any) {
        this.httpGatewayService
            .get("/api/test", "TestCall")
            .subscribe((data) => this.result = data.content);
    }
}
